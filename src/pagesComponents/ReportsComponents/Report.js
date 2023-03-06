import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteReport } from "../../services/API.js";
import logoduck from "../../assets/duck-head.png"
import commentImg from "../../assets/commentImg.png"

export default function Report({ comment, userName, stokedLevel, id, setReload, reload, date }) {
    const navigate = useNavigate();
    const slicedDate = date.slice(0, 10);
    const splitDate = slicedDate.split("-");

    function deleteReportRequest(id) {
        const user = JSON.parse(localStorage.getItem("surfsup"));

        if (!user) {
            alert("Faca login para comentar bro!");
            navigate('/signIn');
        } else {
            deleteReport(id).then((response) => {
                console.log(response.data);
                setReload(!reload);
            }).catch((error) => {
                console.log(error);
            });
        };
    }
    const stoked = stokedLevelDiv()

    function stokedLevelDiv() {
        if (stokedLevel === 'Tá flat bro') {
            return (
                <div>
                    <img src={logoduck} />
                </div>
            )
        } else if (stokedLevel === 'Dá pra brincar') {
            return (
                <div>
                    <img src={logoduck} />
                    <img src={logoduck} />
                </div>
            )
        } else {
            return (
                <div>
                    <img src={logoduck} />
                    <img src={logoduck} />
                    <img src={logoduck} />
                </div>
            )
        }
    }
    return (
        <CommentBox>
            <div class="arrow">
                <div class="outer"></div>
                <div class="inner"></div>
            </div>
            <div class="message-body">
                <div>
                    <UserNameNDate>
                        <div>{userName}</div>
                        <p>{splitDate[2]}/{splitDate[1]}/{splitDate[0]}</p>
                    </UserNameNDate>
                </div>
                <Comment>
                    <UserComment>
                        <p>{comment}</p>
                    </UserComment>
                    <Forcast>
                        <p>6m</p>
                        <p>SE</p>
                    </Forcast>
                    <Stoked>
                        <>{stoked}</>
                    </Stoked>
                </Comment>
                <DeleteDiv>
                    <ion-icon onClick={() => deleteReportRequest(id)} name="trash-outline"></ion-icon>
                </DeleteDiv>
            </div>
        </CommentBox>
    )
}

const CommentBox = styled.div`
  clear: both;
  position: relative;
  
  .message-body {
  float: left;
  width: 90%;
  height: auto;
  background-color: #87aab2;
  min-height: 8rem;
  border: 3px solid #52B6FF;
  padding: 6px 8px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 25px;
  color: #095e79;

  p {
  margin: 0;
}
}

  .arrow {
  width: 12px;
  height: 20px;
  overflow: hidden;
  position: relative;
  float: left;
  top: 16px;
  right: -1px;  

  .outer {
  width: 0;
  height: 0;
  border-right: 20px solid #52B6FF;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  position: absolute;
  top: 0;
  left: 0;
}

.inner {
  width: 0;
  height: 0;
  border-right: 20px solid #52B6FF;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  position: absolute;
  top: 0;
  left: 2px;
}
}
`
const UserNameNDate = styled.div`
font-style: italic;
width: 15rem;
display: flex;
margin: 4px 2px 0px 4px;
padding: 2px;
border-bottom: 1px dashed #5B818A;

div{
    margin-right: 12px;
}
`
const Comment = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const UserComment = styled.div`
width: 20rem;
word-break:break-all;
`
const Forcast = styled.div`
width: 3rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Stoked = styled.div`
width: 10rem;
display: flex;
justify-content: center;
align-items: center;
img{
   height: 32px;
}
`
const DeleteDiv = styled.div`
display: flex;
justify-content: flex-end;
ion-icon{
   font-size: 20px;
   color: #095E79;
}
`






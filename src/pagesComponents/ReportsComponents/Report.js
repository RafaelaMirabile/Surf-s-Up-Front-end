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
            <div className="arrow">
                <div className="outer"></div>
                <div className="inner"></div>
            </div>
            <div className="message-body">
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
width: 100%;
height: 160px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  
  .message-body {
  float: left;
  width: 92%;
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
  top: 22px;
  right:47%;

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
width: 50%;
display: flex;
margin: 4px 0px 0px 4px;
padding: 2px;
border-bottom: 1px dashed #5B818A;

div{
    margin-right: 12px;
}
p{
    width: 100%;
}
`
const Comment = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-left: 4px;
   height: 50%;
   padding: 2px;
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
height: 100%;
display: flex;
justify-content: center;
align-items: center;

img{
   height: 32px;
}
@media (max-width: 460px) {
    img{
        height: 30px;
    }
}
@media (max-width: 438px) {
    img{
        height: 27px;
    }
}
@media (max-width: 410px) {
    img{
        height: 24px;
    }   
}
@media (max-width: 352px) {
    img{
        height: 20px;
    }   
}
@media (max-width: 302px) {
    img{
        height: 15px;
    }   
}
@media (max-width: 375px) {
    img{
        height: 22px;
    }   
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






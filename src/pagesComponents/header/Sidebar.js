import { useContext, useState } from "react";
import { slide as Menu } from "react-burger-menu"
import { Link, useNavigate } from "react-router-dom"
import PointsContext from "../../contexts/pointsContext";
import sair from "../../assets/signout.png"
var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '20px',
    left: '14px',
    top: '10px'
  },
  bmBurgerBars: {
    background: '#68D2DF'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#68D2DF'
  },
  bmMenuWrap: {
    height: '100%'
  },
  bmMenu: {
    background: '#4F90A0',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    color: '#095E79',
    fontFamily: 'Lexend Deca',
    fontSize: '1.25em',
    fontWeight: '700',
    lineHeight: '25px',
    textDecoration: 'none'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default () => {
  
  const { setShowList } = useContext(PointsContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleIsOpen = () => {
    setOpen(!open)
  }

  const closeSideBar = () => {
    setShowList(0);
    setOpen(false)
  }

  return (
    <Menu
      styles={styles}
      isOpen={open}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}>
      <Link to="/" onClick={closeSideBar}>
        Picos
      </Link>
      <Link to="/cadastroPoint">
        Cadastrar Pico
      </Link>
      <div onClick={() => {
              localStorage.clear("surfsup");
              navigate("/signIn");
            }}>
        Sair
        <img src={sair}/>
      </div>
    </Menu>
  )
}
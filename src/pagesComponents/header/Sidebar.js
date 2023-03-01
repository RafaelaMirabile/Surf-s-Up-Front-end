import { slide as Menu } from "react-burger-menu"
import { Link } from "react-router-dom"
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
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
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
    padding: '10px'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

  export default () => {
    return (
        <Menu styles={styles} >
            <Link to="/cadastroPoint">
                Picos Favoritos
            </Link>
        </Menu>
    )
}
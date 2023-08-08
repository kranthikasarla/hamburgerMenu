// Write your code here
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {Link, withRouter} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>
    </div>
    <Popup
      modal
      trigger={
        <button type="button" data-testid="hamburgerIconButton">
          <GiHamburgerMenu size="30" />
        </button>
      }
    >
      {close => (
        <div className="modal-container">
          <button
            className="close-button"
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size="30" color="#616e7c" />
          </button>
          <ul className="nav-link-list">
            <li className="nav-link-item">
              <Link className="nav-link" to="/" onClick={() => close()}>
                <AiFillHome size="36" />
                <p className="nav-link-content">Home</p>
              </Link>
            </li>
            <li className="nav-link-item">
              <Link className="nav-link" to="/about" onClick={() => close()}>
                <BsInfoCircleFill size="36" />
                <p className="nav-link-content">About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)
export default withRouter(Header)

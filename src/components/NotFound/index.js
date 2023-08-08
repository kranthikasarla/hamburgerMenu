// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <Link to="/bad-path" className="nav-link">
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-heading">Lost Your Way?</h1>
      <p className="not-found-description">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </Link>
)

export default NotFound

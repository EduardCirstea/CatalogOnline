import LoginForm from './LoginForm'
import './style/navbar.css'
import { Logo } from '../assets'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="col-1">
      <div className="nav-container">
        <div className="center-div">
          <img src={Logo} alt="" className="logo-img" width="130px;" />
        </div>

        <LoginForm />
        <div className="link-group">
          <Link to="/">Home</Link>
          <Link to="/informatii">Informatii generale</Link>
          <Link to="/">Contact</Link>
          <Link to="/termeni-si-conditii-de-utilizare">
            Termeni si conditii de utilizare
          </Link>
        </div>

        <div className="nav-footer">
          <p>Copyright 2007-2022 Cirstea Marcu-Eduard</p>
          <p>Learning purpose</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar

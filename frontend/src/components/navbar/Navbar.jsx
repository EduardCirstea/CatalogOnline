import LoginForm from './LoginForm'
import { Logo } from '../../assets'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UserPanel from './UserPanel'
import AdminPanel from './AdminPanel'
import AditionalLinks from '../AditionalLinks'
import Logout from './Logout'
import '../style/navbar.css'

function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="col-1">
      <div className="nav-container">
        <div className="center-div">
          <img src={Logo} alt="" className="logo-img" width="80px;" />
        </div>

        {user && !user.isAdmin ? (
          <>
            <UserPanel />
            <Logout />
          </>
        ) : user && user.isAdmin ? (
          <>
            <AdminPanel />
            <Logout />
          </>
        ) : (
          <LoginForm />
        )}
        <AditionalLinks />
        <div className="nav-footer">
          <p>Copyright 2007-2022 Cirstea Marcu-Eduard</p>
          <p>Learning purpose</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar

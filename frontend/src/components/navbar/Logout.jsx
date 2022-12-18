import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, reset } from '../../features/auth/authSlice'
import '../style/style.css'

import { BiLogOut } from 'react-icons/bi'
function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <div className="div-center">
      <button className="btn logout" onClick={onLogout}>
        <BiLogOut /> Logout
      </button>
    </div>
  )
}

export default Logout

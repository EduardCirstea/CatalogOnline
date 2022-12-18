import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'
import Input from '../Input'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import '../style/navbar.css'

function LoginForm() {
  const [formData, setFormData] = useState({
    cnp: '',
    password: '',
  })
  const { cnp, password } = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    //Redirect when logged in
    if (isSuccess || user) {
      toast.success(message)
    }
    dispatch(reset())
  }, [isError, message, isSuccess, user, navigate, dispatch])

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      cnp,
      password,
    }
    dispatch(login(userData))
    // Cookies.set('user', JSON.stringify(userData))
  }

  return (
    <form onSubmit={onSubmit}>
      <p className="p">Autentificare utilizator</p>
      <Input
        type="text"
        name="cnp"
        message="CNP / Pasaport"
        value={cnp}
        label="Username: "
        onChange={onChange}
      />
      <Input
        type="password"
        name="password"
        message="Parola"
        value={password}
        label="Parola: "
        onChange={onChange}
      />
      <div className="link-register">
        <Link to="/">Resetare Parola</Link>
        <Link to="/">Inregistrare</Link>
      </div>

      <div className="center-div">
        <button className="btn btn-primary">Login</button>
        {/* <Button
          type="button"
          name="primary"
          disabled={false}
          message="Login"
          onSubmit={onSubmit}
        /> */}
      </div>
    </form>
  )
}

export default LoginForm

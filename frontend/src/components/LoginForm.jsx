import { useState } from 'react'
import { toast } from 'react-toastify'
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'
import './style/navbar.css'

function LoginForm() {
  const [formData, setFormData] = useState({
    cnp: '',
    password: '',
  })

  const { cnp, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit}>
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
        <Button type="button" name="primary" disabled={false} message="Login" />
      </div>
    </form>
  )
}

export default LoginForm

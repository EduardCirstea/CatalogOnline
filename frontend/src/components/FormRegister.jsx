import { useState } from 'react'
import { toast } from 'react-toastify'

function FormRegister() {
  const [formData, setFormData] = useState({
    name: '',
    cnp: '',
    email: '',
    password: '',
  })

  const { name, cnp, email, password } = formData

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
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          name="name"
          onChange={onChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          name="email"
          onChange={onChange}
          placeholder="Enter student email"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="cnp"
          value={cnp}
          name="cnp"
          onChange={onChange}
          placeholder="Enter student cnp"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          name="password"
          onChange={onChange}
          placeholder="Enter student password"
          required
        />
      </div>
      <div className="form-group">
        <button className="btn btn-block">Submit</button>
      </div>
    </form>
  )
}

export default FormRegister

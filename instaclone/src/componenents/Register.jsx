import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/auth'

const Register = () => {
  const navigate = useNavigate()
  const initialFormValues = {
    username: '',
    displayName: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialFormValues)
  const [pass, setPass] = useState("right")

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(formValues.password === formValues.confirmPassword){
        console.log("works")
    await RegisterUser({
      displayName: formValues.displayName,
      username: formValues.username,
      password: formValues.password,
    })
    setPass('right')
    setFormValues(initialFormValues)
    navigate('/login')
  } else {
    setPass('wrong')
  }
}
  return (
  <div>

      <div className="form">
        <div className="Register-form">
        <h1>Register to create account</h1>
          <form className="register" onSubmit={handleSubmit}>
            <div className="input-container">
                <ul>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={formValues.username}
                    placeholder="username"
                    name="username"
                    required
                    />
                </ul>
                <ul>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={formValues.displayName}
                    placeholder="Display"
                    name="displayName"
                    required
                    />
                </ul>
                <ul>
                  <input
                    type="password"
                    onChange={handleChange}
                    value={formValues.password}
                    placeholder="password"
                    name="password"
                    required
                    />
                </ul>
                <ul>
                  <input
                    type="password"
                    onChange={handleChange}
                    value={formValues.confirmPassword}
                    placeholder="password"
                    name="confirmPassword"
                    required
                    />
                </ul>
                <ul><p className={pass}>Passwords are not the same</p></ul>
              
            </div>
            <div className="button-container">
              <ul>
                <input
                  type="submit"
                  disabled={!formValues.username || !formValues.password}
                  />
              </ul>
            </div>
          </form>
        </div>
      </div>
                  </div>
  )
}
export default Register

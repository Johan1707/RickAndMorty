import { useState } from 'react'
import { validation } from './validation'

const initialState = {
    email: '',
    password: ''
}

export const Form = () => {
    const [userData, setUserData] = useState(initialState)
    const [errors, setErrors] = useState({})

    const handleChange = ({ target: { name, value }}) => {   
          
        setUserData({ ...userData, [name]: value })
        setErrors(validation({ ...userData, [name]: value }))
    }

  return (
    <form>
        <label>Email</label>
        <input name='email' value={userData.email} onChange={handleChange} />
        {errors?.email && <p>{errors.email}</p>}
        <label>Password</label>
        <input name='password' value={userData.password} onChange={handleChange} />
        {errors?.password && <p>{errors.password}</p>}
        <button>Submit</button>
    </form>
  )
}
import styles from './Register.module.css'

import { useState, useEffect } from 'react'


const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    const user = {displayName, email, password}

    if(password !== confirmPassword){
      setError("Passwords must be exactly the same.")
      return
    }
  }

  return (
    <div className={styles.register}>
        <h1>Register yourself!</h1>
        <p>Create your user account amd share your story with us</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Name:</span>
            <input type="text" placeholder='Full name' name='displayname' value={displayName} onChange={(e) => setDisplayName(e.target.value)} required/>
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email" placeholder='E-mail' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </label>
          <label>
            <span>Password:</span>
            <input type="password" placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </label>
          <label>
            <span>Confirm password:</span>
            <input type="password" placeholder='Confirm password' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
          </label>
          <button className='btn'>Register</button>
          {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register
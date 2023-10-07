import React from 'react'
import './login.css'

function Login() {
  return (
    <div className = 'login'>
      <h1>Choose a Login Method</h1>
      <div className='wrapper'>
        <div className='loginLeft'>
          <button className='googleBtn'>
            <img className='googleImg' src = 'img/google.png'></img>Google</button>
          <button className='fbBtn'>
            <img className='googleImg' src = 'img/facebook.png'></img>Facebook</button>
          <button className='ghBtn'>
            <img className='googleImg' src = 'img/github.png'></img>Github</button>
        </div>
        <div className='loginCenter'>OR</div>
        <div className='loginRight'>
          <input className='loginInput' placeholder='Username'></input>
          <input className='passwordInput' placeholder='Password'></input>
          <button className='loginBtn'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
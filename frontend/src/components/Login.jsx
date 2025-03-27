import React, { useState } from 'react';
import './Login.css';

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className='containerLogin'>
      <h1>Login</h1>

      <div className='boxLogin'>

        <form className='formLogin'>

          <div className='flexLogin'>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="กรอกUsernameของคุณ"
            />
          </div>

          <div className='flexLogin'>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="กรอกรหัสผ่านของคุณ"
            />
          </div>

          <button className="Loginsubmit" type="submit">Login</button>
        </form>
      </div>

    </div>
  )
}

export default Login
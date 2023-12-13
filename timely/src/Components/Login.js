import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleEventListener = () => {
    setIsLogin(false);
  };

  const loginEventListener = () => {
    setIsLogin(true);
  };

  return (
    <div className='Login-body'>
      <div className={`login-container ${isLogin ? 'login-container' : 'login-container active'}`} id="login-container">
        <div className="form-login-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">

            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className="hidden" id="login" onClick={loginEventListener}>
                Sign In
              </button>
            </div>

            <div className="toggle-panel toggle-right">
              <h1>Welcome, Friend!</h1>
              <p>Enter your personal details to use all site features</p>
              <button className="hidden" id="register" onClick={handleEventListener}>
                Sign Up
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Login

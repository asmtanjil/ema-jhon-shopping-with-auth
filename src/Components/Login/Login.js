import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <h2 className='form-title'>Login</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <input className='btn-submit' type="submit" value="Login" />
        <p>New to Ema-Jhon? <Link to='/signup'>Please Create New Account</Link></p>
      </form>
    </div>
  );
};

export default Login;
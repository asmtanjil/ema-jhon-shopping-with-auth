import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='login-container'>
      <h2 className='form-title'>Sign Up</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>
        <input className='btn-submit' type="submit" value="Login" />
        <p>Already have an Account? <Link to='/login'>Please Login</Link></p>
      </form>
    </div>
  );
};

export default SignUp;
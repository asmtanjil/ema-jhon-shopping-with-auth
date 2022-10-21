import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContexts';
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        form.reset();
        navigate(from, { replace: true })
      })
      .catch(error => console.error(error))
  }

  return (
    <div className='login-container'>
      <h2 className='form-title'>Login</h2>
      <form onSubmit={handleSignIn}>
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
    </div >
  );
};

export default Login;
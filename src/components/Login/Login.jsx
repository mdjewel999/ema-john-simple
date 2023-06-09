import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
const [show, setShow] = useState(false)

const {signIn} = useContext(AuthContext)
//useNavigate
const navigate = useNavigate()
//useLocation
const location = useLocation()
console.log(location);

 const from = location.state?.from?.pathname || '/';

const handleLogin = event=>{
  event.preventDefault()

  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password);

  signIn(email, password)
  .then(result =>{
    const loggedUser =result.user;
    console.log(loggedUser);
    form.reset();
    navigate(from, {replace: true } )
  })
  .catch(error =>{
    console.log(error);
  })
}

  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" placeholder="Your email" required></input>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type={show ? "text" : "password"} name="password" id="" placeholder="password" required></input>
          <p onClick={() =>setShow(!show)}><small>
            {
              show ? <span>Hide password</span> : <span>Show password</span>
            }
            </small></p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
        <p><small>New to Ema-john ? <Link to="/signup"> Create New Account</Link></small></p>
      </form>
    </div>
  );
};

export default Login;

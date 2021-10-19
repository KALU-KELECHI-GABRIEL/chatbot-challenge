import { React, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import './login.css';

function Login() {
    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    })

    /**
     * onchange of form input
     * @param {*} e.target object
     */
    const onChange = (e) => {
        e.persist();
        setLoginDetails(loginDetails => ({
          ...loginDetails,
          [e.target.name]: `${e.target.value}`
        }));
    }
    /**
     * login form submit
     * 
     */
    const loginSubmit = (login) => {
        
    }
    return (
        <div className="body-min">
        <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Forgot Password</label>
        <div className="login-form">
          <div className="sign-in-htm">
            <form onSubmit={loginSubmit()}>
            <div className="group">
              <label htmlFor="user" className="label">Username</label>
              <input id="user" type="text" name='username' value={loginDetails.username} className="input" onChange = { (e) => onChange(e) } />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Password</label>
              <input id="pass" type="password" name="password" value={loginDetails.password} className="input" data-type="password"  onChange = { (e) => onChange(e) }/>
            </div>
            <div className="group">
              <input id="check" type="checkbox" className="check" defaultChecked />
              <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
            </div>
            <div className="group">
              <input type="submit" className="button" defaultValue="Sign In" />
            </div>
            </form>
            <Link onClick={e => (!loginDetails.username && !loginDetails.password) ? e.preventDefault() : null} to={`/chat?username=${loginDetails.username}`} >
            <button className="button">Test Login</button>
            </Link>
            <div className="hr" />
            <div className="foot-lnk">
              <a href="#forgot">Forgot Password?</a>
            </div>
          </div>
          <div className="sign-up-htm">
            <form action="">
            <div className="group">
              <label htmlFor="user" className="label">Username</label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group">
              <input type="submit" className="button" defaultValue="Sign Up" />
            </div>
            </form>
            <div className="hr" />
            <div className="foot-lnk">
              <label htmlFor="tab-1">Sign In?
              </label></div>
          </div>
        </div>
      </div>
    </div>    
        </div>

    )
}

export default Login

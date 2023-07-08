import React, { useState } from 'react';
import get_user, {add_user, login_user, create_user} from "./API"

import "./css/start_forms.css";

// Login Form Component
export default function LoginForm({ callback }) {
  
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
      event.preventDefault();
      if (username == "" || password == "") { callback("none"); return; } 
      else {
      
      login_user(username, password).then((msg) => {console.log(msg); callback(msg)});
      setPassword("");
      setUsername("");
    }
 
  };
  
  function enable_singin(){
    let Login = document.getElementById("Loginform")
    let Singin = document.getElementById("Singin")
    Login.style.transform = "translate(-50%, -250%)"
    Singin.style.transform = "translate(-50%, -50%)"
    Singin.style.visibility = "visible"
  }


  return (
    <form onSubmit={handleSubmit} id="Loginform" className='form_wrapper'>
      <span className='titel'>Login</span>
      <label className='username'>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label className='password'>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button className='sub_button' type="submit">Login</button>
      <button className='sing_in_t' type="button" onClick={enable_singin}>Singin</button>
    </form>
    
  );
}


// Sign-up Form Component
export function SignupForm({ callback }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let a = add_user(create_user(username, password)).then((msg) => callback(msg));
    console.log(a);
    setPassword("");
    setUsername("");
  };
  function disable_singin(){
    let Login = document.getElementById("Loginform")
    let Singin = document.getElementById("Singin")
    Login.style.transform = "translate(-50%, -50%)"
    Singin.style.visibility = "hidden"
  }

  return (
    <form onSubmit={handleSubmit} id="Singin" className='form_wrapper'>
      <span className='titel'>Sing up</span>
      <label className='username'>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label className='password'>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Submit</button>
      <button type='button' className='sing_in_t' onClick={disable_singin}>back</button>
    </form>
  );
}

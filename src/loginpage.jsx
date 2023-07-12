import React, { useState, useEffect } from 'react';
import LoginForm, {SignupForm} from "./extm/start_forms"
import { useNavigate } from 'react-router-dom';
import { check_user, get_users } from './extm/API';
import "./loginpage.css"

import {check_ram_for_id, add_id_to_ram, get_from_ram_id} from './extm/extr';

function Login_page() {
  const navigate = useNavigate();
  function change_to_main(){
    console.log("Move to main value:" + check_ram_for_id());
    console.log(get_from_ram_id())
    if (check_ram_for_id() == true){
      console.log("to main")
      navigate("/main")
    }
  }
  
  useEffect(() => 
    change_to_main(),[]);
  
  
  
  function onLogin(msg){
    if (msg.name != "NONE" && msg.password != "NONE") {
      if (msg != "none"){
        if( check_ram_for_id){
          add_id_to_ram(msg._id["$oid"]);
          change_to_main();
        
        }
    
      }
  }
  }
  function onSignup(msg){
    console.log(msg);
  }
  return (
    <div className='main'>
        <div className="login">
          <LoginForm callback={onLogin}></LoginForm>
          
          <SignupForm callback={onSignup}></SignupForm>
        </div>
        
    
        {/* <button onClick={() => adduser(USER_TEMPLATE)}>adduser</button> */}
        <button onClick={()=>console.log(get_users(), check_user("Hakira"))}>showuser</button>
    </div>
  );
}
export default Login_page; 
import { useNavigate, useRevalidator } from 'react-router-dom';
import Header from "./mainpage/BalicComponents";
import {remove_id_from_ram, get_from_ram_id} from './extm/extr';
import { useEffect, useState } from 'react';
import get_user from './extm/API';

function Main_page() {
    const navigate = useNavigate();
    const user_id = get_from_ram_id();
    const [user, setUser] = useState("UNKNOWN");
    
    useEffect(() => {
      async function fetchData() {
        try {
          const userData = await get_user(user_id);
          setUser(userData);
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchData();
    }, [user_id]);
    
    function logOut(){
        remove_id_from_ram()
        navigate("/")
      }

    let nav = <button onClick={logOut}>Log out</button>

    return (
    <div>
        <Header user={user.name} cusnav={nav}/>
        <p></p>
        <button onClick={logOut}>Log out</button>
    </div>   
    );
  }
  export default Main_page; 
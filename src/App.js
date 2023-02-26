import { Login } from "./component/Login";
import { Logout } from "./component/Logout";
import { useEffect, useState } from "react";
import {gapi} from 'gapi-script';
const clientId="954405017025-n3pibmfak5orujvt86orrsoo59arh26q.apps.googleusercontent.com"
function App() {
  const [login,setLogin]=useState(false);
  const [loggedIn,setLoggedIn]=useState(window.localStorage.getItem('isLoggedIn'))

  useEffect (()=>{
    function start(){
      gapi.client.init(
        {
          clientId:clientId,
          scope:""
        }
      )
    };
    gapi.load('client:auth2',start);
  });

 const hundleLogin = () =>{
       setLogin(true);
  }


  const hundleLogout = () =>{
    setLogin(false);
    window.localStorage.removeItem('isLoggedIn');
    setLoggedIn(false)
}
  return (
    <div className="">
          {(login || loggedIn )? <Logout hundleLogout={hundleLogout}/>:
          <Login hundleLogin={hundleLogin} />
}
    </div>
  );
}

export default App;

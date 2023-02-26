import React, { useState } from 'react'
import photo from "./image/logo.jpg";
import { GoogleLogin } from 'react-google-login';
import { LoginSocialFacebook } from "reactjs-social-login"
import { FacebookLoginButton} from "react-social-login-buttons"
import Alert from 'react-bootstrap/Alert';

const clientId="954405017025-n3pibmfak5orujvt86orrsoo59arh26q.apps.googleusercontent.com"
export const Login = ({hundleLogin}) => {
    const [user,setUser]=useState({})
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [remember,setRemember]=useState(false)
    const [error,setError]=useState(false);
    const disable=!user || !password;


    
    const onSuccess=(res)=>{
        console.log("LOGIN SUCCES! Current user:",res.profileObj);
        setUser(res.profileObj)
        hundleLogin()
    }
    const onFailure=(res)=>{
        console.log("Login Failed! res:",res);
    }

    const hundleChange=()=>{
      if(remember===true){
        setRemember(false)
      }
      else{
        setRemember(true)
      }
      
    }

    const hudleUserLogin=(e)=>{
      e.preventDefault();
      if(password==="12345678" && userName==="user1"){
        if(remember===true){
          window.localStorage.setItem('isLoggedIn',true);
        }
        else{
          hundleLogin()
        }
      }
      else{
        setError(true);
        console.log(error)
      }
      console.log(error)
    }


  return (
    <div className="my-5">
    <div className='col-md-5 mx-auto'>
   
    <div className="mx-5">
        <img src={photo} alt="no image" />
      </div>
      <div className='fs-1 mx-3'>ASTU E-Student</div>
    </div>

     <div className="card card-body col-md-5 mx-auto my-5"> 
      <p className='mx-auto'>For students</p>




      {error ?<Alert variant="danger" onClose={() => setError(false)} dismissible>
        <p>Invalid login credentials. Please try again!</p>
      </Alert>:null}



      <form className='w-100' onSubmit={hudleUserLogin}>
      <div className='form-floating mb-3'>
        <input type="text" className="form-control" id='formname' placeholder='username' value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
        <label htmlFor='formname'>Username</label>
      </div>
      <div className='form-floating mb-3'>
        <input type="password" className='form-control' id='formpassword' placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <label htmlFor='formpassword'>Password</label>
      </div>
      <div className="form-check">
      <input className="form-check-input" type="checkbox"  id="flexCheckChecked" value={remember} onChange={()=>hundleChange()} ></input>
           <label className="form-check-label" for="flexCheckChecked">
              Remember me?
              <a href='' className='mx-5'>Forget password ?</a>
           </label>
    </div>
      <div className='my-4'><button type='submit' className='btn btn-primary btn-lg w-100 py-1' disabled={disable}>Sign in</button></div>
      </form>
      <div className='mx-auto fs-7 my-2'>Or log in with</div>
      <div className='mx-auto my-2'>
      <GoogleLogin 
      clientId={clientId}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
      size="7rem"
      />
      </div>
      <div className='mx-auto my-2'>
      <LoginSocialFacebook
             appId='1722946428190468'
             onResolve={(response)=>{
              console.log(response)
              hundleLogin()
             }}
             onReject={(error)=>{
              console.log(error)
             }}
             >
        <FacebookLoginButton size='2.5rem'/>
      </LoginSocialFacebook>
      </div>
      </div>
    </div>
  )
}

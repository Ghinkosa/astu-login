import React from 'react'
import { GoogleLogout } from 'react-google-login';

const clientId="954405017025-n3pibmfak5orujvt86orrsoo59arh26q.apps.googleusercontent.com"

export const Logout = ({hundleLogout}) => {
    const onSuccess=(res)=>{
        console.log("Logout successfull!");
        hundleLogout()
    }
  return (
    <div>
        <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
        />
    </div>
  )
}

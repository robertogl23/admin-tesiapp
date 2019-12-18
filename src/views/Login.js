import React from 'react';
import ScreenLogin from '../components/Login/ScreenLogin'
import './style.css'
export default function Login(props){

     return(
         <div className="main-container-login">
             <div className="container-screenlogin">
                <ScreenLogin fct={props.fctUpdate}/>
             </div>
         </div>
     )

}
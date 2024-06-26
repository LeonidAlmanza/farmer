import { useState } from "react";
import {useAuth} from "../auth/authProvider";
import { Navigate } from "react-router-dom";

import '../styles/css.css';


function Login(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate   to="/home"/>;
    }
    return(
        <>
            <div class="container">
                <div class="screen">
                <div class="screen__content">
                    <form class="login">
                    <div class="login__field">
                        <i class="login__icon fas fa-user"></i>
                        <input type="text" class="login__input" placeholder="User name / Email" 
                                value={name} 
                                onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <h2>desde login</h2>
                    <div class="login__field">
                        <i class="login__icon fas fa-lock"></i>
                        <input type="password" class="login__input" placeholder="Password" 
                                value={password} 
                                onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button class="button login__submit">
                        <span class="button__text">Ingresar</span>
                        <i class="button__icon fas fa-chevron-right"></i>
                    </button>				
                    </form>
                    <div class="social-login">
                    <h3>Social Media</h3>
                    <div class="social-icons">
                        <a href="#" class="social-login__icon fab fa-instagram"><img src="assets\facebook.png"/></a>
                        <a href="#" class="social-login__icon fab fa-facebook"><img src=".\assets\facebook.png"/></a>
                        <a href="#" class="social-login__icon fab fa-twitter"><img src=".\assets\gorjeo.png"/></a>
                    </div>
                    </div>
                </div>
                <div class="screen__background">
                    <span class="screen__background__shape screen__background__shape4"></span>
                    <span class="screen__background__shape screen__background__shape3"></span>		
                    <span class="screen__background__shape screen__background__shape2"></span>
                    <span class="screen__background__shape screen__background__shape1"></span>
                </div>		
                </div>
            </div>
        </>
    );
}

export default Login;
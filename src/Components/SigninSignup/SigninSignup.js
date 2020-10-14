import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../image/LoginSignup.png'
import './style.css'


export default function Landing() {
    return (
        <>

            <h1 className="title">Passez une commande</h1>

            <div className="ctnr-img-redirection">
                <img className="background" src={background}></img>

                <div className="redirection">
                    <Link to="signup">Inscription</Link>
                    <Link to="login">Connexion</Link>
                </div>

            </div>


        </>
    )
}
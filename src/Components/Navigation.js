import React from "react";
import { Link } from "react-router-dom";
import "../CssStyles/acueil.css";

export default function Navigation(){
  return(
    <div>
      <header>
        <div class="container1">
          <div class="div11">
            <img class="imglogo" src="logo.png" alt="Logo" />
            <Link class="li2" to="/">PuretéPro</Link>
          </div>
          <ul class="ul1">
          <li class="li1"><Link class="a" to="/">Accueil</Link></li>
            <li class="li1"><Link class="a" to="/serviecs">Service</Link></li>
            <li class="li1"><Link class="a" to="/produits">Produit</Link></li>
            <li class="li1"><Link class="a" to="/Reservations">Reservation</Link></li>
            <li class="li1"><Link class="a" to="/Pr+ojet">Projet</Link></li>
            <li class="li1"><Link class="a" to="/Contact">Contact</Link></li>
            <div class="li12">
            <li class="li13"><Link class="a1" to="/login">Login</Link></li>
            <li class="li14"><Link class="a2" to="/incri">inscrire</Link></li>
            </div>
            
          </ul>
        </div>
      </header>
    </div>
  )
}
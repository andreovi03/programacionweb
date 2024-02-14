import React from "react"
import { Logo } from "./logo/logo"
import { Cards } from "./cards/cards"

export function Header(){
    return(
        <main>
            <div id="header">
                <Logo />
                <div id="searchbar">
                <h3 id="searchtxt">Search</h3>
                <img id="searchicon" src="https://icones.pro/wp-content/uploads/2021/02/loupe-et-icone-de-recherche-de-couleur-grise.png" />
                </div>
                <div id="profile">
                <img id="profilelogo" src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png" />
                <h3 id="signregistertxt">Sign in / Register</h3>
                <div id="shopsection">
                <img id="shop" src="https://icones.pro/wp-content/uploads/2021/05/symbole-charrette-gris.png" />
                <h3 id="shoptxt">MY CART</h3>
                </div>
            </div>
            </div>
            <div id="orangeheader">
              <h3 id="dogdaytxt">DOGDAY IS OFFICIALLY HERE! CHECK OUT THE DOGDAY PLUSH NOW!</h3>
            </div>
            <div id="optionbar">
            <OptionCards text= 'NEW ARRIVALS' iconUrl='https://poppyplaytime.com/cdn/shop/files/new_v2-01_250x.svg?v=1688072631'></OptionCards>
            <OptionCards text= 'PLUSH' iconUrl='https://poppyplaytime.com/cdn/shop/files/plush_250x.svg?v=1688068181'></OptionCards>
            <OptionCards text= 'APPAREL' iconUrl='https://poppyplaytime.com/cdn/shop/files/apparel-01_250x.svg?v=1688073138'></OptionCards>
            <OptionCards text= 'ACCESORIES' iconUrl='https://poppyplaytime.com/cdn/shop/files/new_v2-01_250x.svg?v=1688072631'></OptionCards> 
            </div>
        </main>
    )
}

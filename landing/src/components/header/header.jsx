import React from "react"
import { Logo } from "./logo/logo"
import { Profile } from "./logo/logo"
import { Searchicon } from "./logo/logo"
import { Shop } from "./logo/logo"

export function Header(){
    return(
        <main>
            <div id="header">
                <Logo></Logo>
                <div id="searchbar">
                <h3 id="searchtxt">Search</h3>
                <Searchicon></Searchicon>
                </div>
                <div id="profile">
                <Profile></Profile>
                <h3 id="signregistertxt">Sign in / Register</h3>
                <div id="shopsection">
                <Shop></Shop>
                <h3 id="shoptxt">MY CART</h3>
                </div>
                </div>
            </div>
        </main>
    )
}

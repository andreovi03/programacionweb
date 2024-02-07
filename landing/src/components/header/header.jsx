import React from "react"
import { Logo } from "./logo/logo"
import { Profile } from "./logo/logo"

export function Header(){
    return(
        <main>
            <div id="header">
                <Logo></Logo>
                <div id="searchbar">
                <h3>Search</h3>
                </div>
                <div id="profile">
                <Profile></Profile>
                </div>
            </div>
        </main>
    )
}

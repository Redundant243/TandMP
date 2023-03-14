import React from "react";

export default function Header()
{
    return(
        <header>
            <div>
                <span className={'logo'}>Market lab</span>
                <ul className={'navigation'}>
                    <li>All works</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div className={'presentation'}></div>
        </header>
    )
}
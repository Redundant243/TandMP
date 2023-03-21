import React, {useState} from "react";

export default function Header()
{
    let [contactsOpen, setContactsOpen] = useState(false)
    return(
        <header>
            <div>
                <span className={'logo'}>Market lab</span>
                <ul className={'navigation'}>
                    <li>All works</li>
                    <li onClick={() => setContactsOpen(contactsOpen = !contactsOpen)}>Contacts</li>
                </ul>
                {contactsOpen && (
                    <div className={'contacts'}>
                        <br/>
                        Phone number: <br/>
                        8-800-555-35-35
                    </div>
                )}
            </div>
            <div className={'presentation'}></div>
        </header>
    )
}
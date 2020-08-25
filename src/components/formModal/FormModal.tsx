import React from 'react'
import "./formModal.scss"

export default function Formmodal() {
    return (
        <div >
            <form className="userForm">

                <h2>Boka Bord</h2>
                <input name="name" placeholder="Namn" type="text" />
                <input name="email" placeholder="Email" type="text" />
                <input name="phone" placeholder="Telefonnummer" type="text" />
                <input name="comment" placeholder="Meddelande till resturangen" type="text" />
                <button type="button">BOKA</button>

            </form>
        </div>
    )
}

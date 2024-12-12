import React from "react";

function Child(OnMessage) {
    const sendMessageToParent = () =>{
        //invia il messaggio al parent tramite la funzione OnMessage
        OnMessage('Ciao dal componente child')
    };

    return (
        <div>
            <button onClick={sendMessageToParent}>
                Invia messaggio al Parent
            </button>
        </div>
    )
}
export default Child
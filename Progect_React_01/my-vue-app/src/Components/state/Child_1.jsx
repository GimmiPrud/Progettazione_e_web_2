import React from "react";

function Child_1({onUserChange}) {
    const updateUser = () => {
        const newUser = { name: 'Mario', age: 30 };
        // invia oggetto al parent 
        onUserChange(newUser);
    };

    return (
        <div>
            <button onClick={updateUser}>
                Aggiorna dati utente 
            </button>
        </div>
    );
};
export default Child_1
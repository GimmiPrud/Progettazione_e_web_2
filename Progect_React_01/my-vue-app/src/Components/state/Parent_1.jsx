import React from "react";
import { useState } from "react";
import Child_1 from "./Child_1";

function Parent_1 () {
    const [user, setUser] = useState({ name: '', age: 0 });

    // funzione di callback per ricevere un oggetto dal child
    const handleUserChange = (userInfo) => {
        setUser(userInfo);
    };

    return (
        <div>
            <h1> Nome: { user.name}, Età: {user.age}</h1>
            <Child_1 onUserChange={handleUserChange}></Child_1>
        </div>
    );

};
export default Parent_1
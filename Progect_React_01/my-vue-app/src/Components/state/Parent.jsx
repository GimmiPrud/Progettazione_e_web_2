import React from "react";
import { useState } from "react";
import Child from "./Child";

function Parent(){
    const [message, setMessage] = useState('')

    // funzione di callback che il child invoca per inviare un messaggio
    const handleMessage = (ChildMessage) =>{
        setMessage(ChildMessage);
    };

    return (
        <div>
            <h1>Messaggio dal child: {message}</h1>
            {/* Passa la funzione handleMessage come prop al child */}
            <Child onMessage={handleMessage} />
        </div>
    );
};
export default Parent

import React from 'react';

function Navb() {

    return (
    <body>
        <nav className='menu'>
            <ul style={{fontFamily:"monospace"}}>
                <li>
                    <button className='button'>
                    <a href="#">Home</a>
                    </button>
                </li>
                <li>
                    <button>
                    <a href="#">Elenco tabelle</a>
                    </button>
                </li>
                <li>
                    <a href="#">Chi Siamo</a>
                </li>
                <li>
                    <a href="#">Contatti</a>
                </li>
            </ul>
        </nav>
    </body>
    );
}

export default Navb;

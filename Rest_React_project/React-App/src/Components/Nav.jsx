
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
                    <a href="#">Database</a>
                    </button>
                </li>
                <li>
                    <button>
                    <a href="#">Chi Siamo</a>
                    </button>
                </li>
                <li>
                    <button>
                    <a href="#">Contatti</a>
                    </button>
                </li>
            </ul>
        </nav>
    </body>
    );
}

export default Navb;

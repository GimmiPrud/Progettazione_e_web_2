
import React from 'react';

function Navb() {
    
    return (
        <nav className='menu' style={{marginLeft:"25%", marginBlock:"3pc", marginRight:"25%"}}>
            <ul>
                <li>
                    <button>
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
                    <a href="#">Contact</a>
                    </button>
                </li>
                <li style={{paddingLeft:"8cap"}}>
                    <span title='About'>
                    <a style={{fontSize:"2.5pc"}} href="#">📑</a>
                    </span>
                </li>
            </ul>
        </nav>
    );
}

export default Navb;

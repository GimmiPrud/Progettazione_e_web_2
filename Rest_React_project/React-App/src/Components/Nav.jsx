
import React from 'react';
function Navb() {
    
    return (
        <nav className='menu' style={{marginLeft:"25%", marginBlock:"3pc", marginRight:"25%"}}>
            <ul>
                <li>
                    <button>
                    <a href="#">Clienti</a>
                    </button>
                </li>
                <li>
                    <button>
                    <a href="#">Assenze</a>
                    </button>
                </li>
                <li>
                    <button>
                    <a href="#">Progetti</a>
                    </button>
                </li>
                <li style={{paddingLeft:"8cap"}}>
                    <span title='About'>
                    <a style={{fontSize:"3.5pc"}} href="#">🖧</a>
                    </span>
                </li>
            </ul>
        </nav>
    );
}

export default Navb;

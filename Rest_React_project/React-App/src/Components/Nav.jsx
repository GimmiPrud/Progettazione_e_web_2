
// import React from 'react';

// function Nav() {

//     return (
//         <nav style={{flexDirection:"row", backgroundColor:"green"}}>
//             <ul>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//             </ul>
//         </nav>
//     );
// }

// export default Nav;

import Nav from 'react-bootstrap/Nav';

function Navb() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navb;
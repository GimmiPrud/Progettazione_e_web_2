import './NavBar.css'
const x = 150;
const img = '/assets/react.svg'
// creazione constanti 

function NavBar(){
    return (
        <>
        <nav>{x}</nav>  
        <img src ={img}></img>
        <ul>
            <li><a href= "#"> ciao </a></li>
            <li><a href= "#"> ciao </a></li>
            <li><a href= "#"> ciao </a></li>
            <li><a href= "#"> ciao </a></li>
        </ul>
        </>
    )
}
export default NavBar
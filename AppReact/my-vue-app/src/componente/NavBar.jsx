import './NavBar.css'
const x = '|-------------------------------------|';
const img = '/vite.svg'
// creazione constanti 

function NavBar(){
    return (
        <>
        <nav>{x}</nav>  
        <img src ={img} height={200} ></img>
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
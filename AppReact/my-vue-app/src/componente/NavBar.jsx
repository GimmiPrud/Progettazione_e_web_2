import './NavBar.css'
const x = '|-------------------------------------|';
const img1 = '/vite.svg'
const img2 = '/react.svg'
// creazione constanti 

function NavBar(){
    return (
        <>
        <nav>{x}</nav>  
        <img src ={img1} height={200} ></img>
        <img src ={img2} height={120} ></img>
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
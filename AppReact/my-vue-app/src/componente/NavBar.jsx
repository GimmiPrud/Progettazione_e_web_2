import './NavBar.css'

// creazione constanti 
const x = '|-------------------------------------|';
const img1 = '/vite.svg'
const img2 = '/react.svg'

const imgStyle = {
    height: '300px',
    borderRadius: '90px'
}

function NavBar(){
    return (
        <>
        <nav>{x}</nav>  
        <img src ={img1} height={200} ></img>
        <img style={imgStyle}  src ={img2}></img>
        <p className='stilemio'> EVVAI </p>
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
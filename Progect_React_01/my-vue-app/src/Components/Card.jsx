
function Card(props) {
    const Titolo = "CIAO A TUTTI"
    const M = props.M
    const i = "https://images.unsplash.com/photo-1730172233418-e23596ad0511?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"
    const imma = props.imma

    return(
        <div>
            <p>{M}</p>
            <p>
                <h2>-- {Titolo} --</h2>
                <h1>BUON ANNO !!</h1>
            </p>
            <img src= {i}/>
            <p>{imma}</p>
        </div>
    )
}
export default Card;

function Card(props) {
    const Titolo = "CIAO A TUTTI"
    const M = props.M
    const i = props.i
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

function Card(props) {
    const Titolo = "CIAO A TUTTI"
    const M = props.M
    const i = props.i
    const imma = props.imma
    const is_visit = props.is_visit

    if (is_visit == true) {
        return null;
    }

    return(
        <div>
            <p>{M}</p>
            <p>
                <h2>-- {Titolo} --</h2>
                <h1>BUON ANNO !!</h1>
            </p>
            <img src= {i}/>
            <p>{imma}</p>
            <span> visitato</span>
        </div>
    )
}

export default Card;
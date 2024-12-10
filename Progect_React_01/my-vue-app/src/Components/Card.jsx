
function Card(props) {
    const Titolo = "CIAO A TUTTI"
    const M = props.M
    const i = props.i
    const imma = props.imma
    const is_visit = props.is_visit

    if (is_visit == true) {
        return is_visit;
    }

    return(
        <div>
            <p>{M}</p>
            <p>
                <h2>-- {Titolo} --</h2>
            </p>
            <img src= {i}/>
            <p>{imma}</p>
            <span> visitato</span>
            {is_visit && <span> non visitato</span>}
        </div>
    )
}

export default Card;
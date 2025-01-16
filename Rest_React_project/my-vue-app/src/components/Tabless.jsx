
import './Tabless.css'

function Tabless({ c0 ,c1 , c2 , c3, c4 }){

    return (
        <>
        <tbody>
        <tr>
            <td >{c0}</td>        
            <td >{c1}</td>
            <td >{c2}</td>
            <td>{c3}</td>
            { c4 ? <td>{c4}</td> : null}
        </tr>
        </tbody>
        </>
    )
}
export default Tabless
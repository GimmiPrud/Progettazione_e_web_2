
import './Tabless.css'

function Tabless({ c0 ,c1 , c2 , c3, c4 }){

    return (
        <>
        <tbody>
        <tr>
            <td className='th'>{c0}</td>        
            <td className='th'>{c1}</td>
            <td className='th'>{c2}</td>
            <td className='th'>{c3}</td>
            { c4 ? <td className='th'>{c4}</td> : null}
        </tr>
        </tbody>
        </>
    )
}
export default Tabless
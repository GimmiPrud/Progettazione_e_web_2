import Table from 'react-bootstrap/Table';
import './Tabless.css'

function Tabless({ t1, t2, t3, t4, t5, c0 ,c1 , c2 , c3, c4 }){

    return (
        <>
        <thead>
        <tr>
            <th className='th'>{t1}</th>
            <th className='th' >{t2}</th>
            <th className='th'>{t3}</th>
            <th className='th'>{t4}</th>
            { t5 ? <th className='th'>{t5}</th> : null}
        </tr>
        </thead>
        <Table>
        
        <tbody>
        <tr>
            <td className='th'>{c0}</td>        
            <td className='th'>{c1}</td>
            <td className='th'>{c2}</td>
            <td>{c3}</td>
            { c4 ? <td>{c4}</td> : null}
        </tr>
        </tbody>
        </Table>
        </>
    )
}
export default Tabless
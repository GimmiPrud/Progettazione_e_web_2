import Table from 'react-bootstrap/Table';
import './Tabless.css'

function Tabless({ t1, t2, t3, t4, t5, c0 ,c1 , c2 , c3, c4 }){

    return (
        <Table>
        <thead>
        <tr>
            <th>{t1}</th>
            <th>{t2}</th>
            <th>{t3}</th>
            <th>{t4}</th>
            { t5 ? <th>{t5}</th> : null}
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>{c0}</td>        
            <td>{c1}</td>
            <td>{c2}</td>
            <td>{c3}</td>
            { c4 ? <td>{c4}</td> : null}
        </tr>
        </tbody>
        </Table>
    )
}
export default Tabless
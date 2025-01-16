import Table from 'react-bootstrap/Table';
import './Tabless.css'

function Tabless({ t1, t2, t3, t4, t5, c0 ,c1 , c2 , c3, c4 }){

    return (
        <Table striped bordered hover>
        <thead className='table'>
        <tr>
            <th className='tt'>{t1}</th>
            <th className='tt'>{t2}</th>
            <th className='tt'>{t3}</th>
            <th className='tt'>{t4}</th>
            { t5 ? <th className='tt'>{t5}</th> : null}
        </tr>
        </thead>
        <tbody>
        <tr className='tt'>
            <td className='tt'>{c0}</td>        
            <td className='tt'>{c1}</td>
            <td className='tt'>{c2}</td>
            <td className='tt'>{c3}</td>
            { c4 ? <td className='tt'>{c4}</td> : null}
        </tr>
        </tbody>
        </Table>
    )
}
export default Tabless
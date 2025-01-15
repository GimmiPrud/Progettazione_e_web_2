import Table from 'react-bootstrap/Table';
import './Tabless.css'

function Tabless({ c0 ,c1 , c2 , c3, c4 }){

    return (
        <Table striped bordered hover>
        <thead className='table'>
        <tr>
            <th className='tt'>ID</th>
            <th className='tt'>ID Progetto</th>
            <th className='tt'>Nome WP</th>
            <th className='tt'>Inizio</th>
            <th className='tt'>Fine</th>
        </tr>
        </thead>
        <tbody>
        <tr className='tt'>
            <td className='tt'>{c0}</td>        
            <td className='tt'>{c1}</td>
            <td className='tt'>{c2}</td>
            <td className='tt'>{c3}</td>
            <td className='tt'>{c4}</td>
        </tr>
        </tbody>
        </Table>
    )
}
export default Tabless
import Table from 'react-bootstrap/Table';
import './Tabless.css'

function Tabless({c1 , c2 , c3, c4 }){

    return (
        <Table>
        <thead>
        <tr>
            <th className='tt'>ID Progetto</th>
            <th className='tt'></th>
            <th className='tt'>merda2</th>
            <th className='tt'>merda3</th>
            <th className='tt'>merda4</th>
        </tr>
        </thead>
        <tbody>
        <tr>
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
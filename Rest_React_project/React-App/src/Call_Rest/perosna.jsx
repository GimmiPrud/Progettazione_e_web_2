import { useState, useEffect } from 'react';
import axios from 'axios';

const Persona = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5004/3')
      .then((response) => {
        setUsers(response.data);  
        setLoading(false);         
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <>
      <h1 className='font'>ANAGRAFICA DIPENDENTE:</h1>
      <table>
        <tr>
            <th className='td'>ID</th>
            <th className='td'>Nome</th>
            <th className='td'>Cognome</th>
            <th className='td'>Posizione</th>
            <th className='td'>Stipendio</th>
        </tr>
        {users.map((user) => (
          //<li key={user.id}>{user.nome} - {user.cognome} - {user.posizione} - {user.stipendio}</li>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nome}</td>
            <td>{user.cognome}</td>
            <td>{user.posizione}</td>
            <td>{user.stipendio}</td> 
          </tr>
        ))}
        </table>
  </>
  );
};

export default Persona;
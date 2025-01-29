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
    <div>
      <h1 className='font'>ANAGRAFICA DIPENDENTE</h1>
      <ul>
      <table className='table'>
        <thead>
        <tr>
            <th className='td'>ID</th>
            <th className='td'>Nome</th>
            <th className='td'>Cognome</th>
            <th className='td'>Posizione</th>
            <th className='td'>Stipendio</th>
        </tr>
        </thead>
        {/* {users.map((user) => (
          //<li key={user.id}>{user.nome} - {user.cognome} - {user.posizione} - {user.stipendio}</li>
          <Tabless key={user.id}
          c0={user.id}
          c1={user.nome}
          c2={user.cognome}
          c3={user.posizione}
          c4={user.stipendio}>
          </Tabless>
        ))} */}
        </table>
      </ul>
    </div>
  );
};

export default Persona;
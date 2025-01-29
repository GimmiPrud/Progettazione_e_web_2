import { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5004/1')
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
      <h1 className='font'>ELENCO PROGETTI:</h1>
      <ul>
      <table className='table'>
      <thead>
        <tr>
            <th className='td'>ID</th>
            <th className='td'>ID Progetto</th>
            <th className='td'>Nome WP</th>
            <th className='td'>Inizio Progetto</th>
            <th className='td'>Fine Progetto</th>
        </tr>
        </thead>
        {users.map((user) => (
          //<li key={user.id}>{user.progetto} - {user.nome} - {user.inizio} - {user.fine}</li>
          <Tabless key={user.id}
          c0={user.id}
          c1={user.progetto}
          c2={user.nome}
          c3={user.inizio}
          c4={user.fine}>
          </Tabless>
        ))}
      </table>
      </ul>
    </div>
  );
};

export default Axios;
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"

const Assenza = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5004/2')
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
      <h1 className='font'>CERTIFICATI DI MALATTIA</h1>
        <table>
        <thead>
        <tr>
            <th className='td'>ID</th>
            <th className='td'>ID Persona</th>
            <th className='td'>Tipo malattia</th>
            <th className='td'>Giorno Assenza</th>
        </tr>
        </thead>
        {users.map((user) => (
          //<li key={user.id}>{user.persona} - {user.tipo} - {user.giorno}</li>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.persona}</td>
            <td>{user.tipo}</td>
            <td>{user.giorno}</td>
          </tr>
        ))}
        </table>
    </div>
  );
};

export default Assenza;
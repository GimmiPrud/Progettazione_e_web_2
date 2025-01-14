import { useState, useEffect } from 'react';
import axios from 'axios';

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
      <h1>Elenco Utenti</h1>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.persona} - {user.tipo} - {user.giorno}</li>
        ))}
      </ul>
    </div>
  );
};

export default Assenza;
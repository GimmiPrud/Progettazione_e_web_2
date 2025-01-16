import { useState, useEffect } from 'react';
import axios from 'axios';
import Tabless from '../components/Tabless';

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
        {users.map((user) => (
          //<li key={user.id}>{user.progetto} - {user.nome} - {user.inizio} - {user.fine}</li>
          <Tabless key={user.id}
          t1={"ID"}
          t2={"ID Progetto"}
          t3={"Nome WP"}
          t4={"Inizio Progetto"}
          t5={"Fine Progetto"}
          c0={user.id}
          c1={user.progetto}
          c2={user.nome}
          c3={user.inizio}
          c4={user.fine}>
          </Tabless>

        ))}
      </ul>
    </div>
  );
};

export default Axios;
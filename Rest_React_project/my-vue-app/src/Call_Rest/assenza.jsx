import { useState, useEffect } from 'react';
import axios from 'axios';
import Tabless from '../components/Tabless';

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
      <ul>
        {users.map((user) => (
            //<li key={user.id}>{user.persona} - {user.tipo} - {user.giorno}</li>
            <Tabless key={user.id}
          t1={"ID"}
          t2={"ID Persona"}
          t3={"Tipo Malattia"}
          t4={"Giorno Assenza"}
          c0={user.id}
          c1={user.persona}
          c2={user.tipo}
          c3={user.giorno}>
          </Tabless>
        ))}
      </ul>
    </div>
  );
};

export default Assenza;
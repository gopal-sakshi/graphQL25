
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Query11 } from './queries11';

function PlayersList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3083/person', {
          query: Query11,
        });

        if (response.data.errors) {
          throw new Error(response.data.errors[0].message);
        }
        console.log("response23 ===> ", response);

        // setPlayers(response.data.data.users);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Players List</h2>
      {/* <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default PlayersList;

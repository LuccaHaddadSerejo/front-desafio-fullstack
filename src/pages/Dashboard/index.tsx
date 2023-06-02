import React, { useContext } from 'react';
import { UserContext } from '../../providers/userContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <main>
      <h1>{user.name}</h1>
      <div>
        <h2>Agenda:</h2>
        <ul>
          {user.contacts.map((elt) => {
            return (
              <li>
                <p>{elt.name}</p>
                <p>{elt.phone}</p>
                <p>{elt.email}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Dashboard;

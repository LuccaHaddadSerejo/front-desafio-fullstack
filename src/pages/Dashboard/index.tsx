import React, { useContext } from 'react';
import { UserContext } from '../../providers/userContext';

const Dashboard = () => {
  const { userList } = useContext(UserContext);
  console.log(userList);
  return (
    <main>
      <h1>Dashboard!</h1>
      <ul>
        {userList?.map((elt) => {
          return (
            <li>
              <p>{elt.name}</p>
              <p>{elt.phone}</p>
              <p>{elt.email}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Dashboard;

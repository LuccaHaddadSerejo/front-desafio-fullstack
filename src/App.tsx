import React from 'react';
import RoutesMain from './routes';
import { UserProvider } from './providers/userContext';
import Global from './styles/global';

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
}

export default App;

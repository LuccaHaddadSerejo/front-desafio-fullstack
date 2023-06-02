import React from 'react';
import RoutesMain from './routes';
import { UserProvider } from './providers/userContext';

function App() {
  return (
    <>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
}

export default App;

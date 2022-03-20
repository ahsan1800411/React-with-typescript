import React, { useContext } from 'react';

import { UserContext } from './UserContext';

const User = () => {
  const result = useContext(UserContext);

  const login = () => {
    result.setUser({
      name: 'Ahsan',
      email: 'ahsanmumtaz008976',
    });
  };

  return (
    <div>
      <h1>{result.user?.name}</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default User;

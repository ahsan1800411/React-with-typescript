import { useState } from 'react';

export const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <button onClick={login}></button>
      <button onClick={logout}></button>
      <h1>User {isLoggedIn ? 'Hai ' : 'ni hai'}</h1>
    </>
  );
};

import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

const Demo = () => {
  const [user, setUser] = useState<null | AuthUser>(null);

  const handleClick = () => {
    setUser({
      name: 'Ahsan',
      email: 'ahsanmumtaz008976@gmail.com',
    });
  };

  return (
    <div>
      <button onClick={handleClick}>change user value</button>
      <h1>
        {user?.name} {user?.email}
      </h1>
    </div>
  );
};

export default Demo;

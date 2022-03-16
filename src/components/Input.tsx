import React, { useState } from 'react';

const Input = () => {
  const [name, setName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input type='text' value={name} onChange={handleChange} />
    </div>
  );
};

export default Input;

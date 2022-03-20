import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Box = () => {
  const theme = useContext(ThemeContext);
  console.log(theme.primary);

  return <div style={{ backgroundColor: theme.primary.main }}>Box</div>;
};

export default Box;

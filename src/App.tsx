import './App.css';
import Button from './components/Button';
import Heading from './components/Heading';
import Optional from './components/Optional';
import Product from './components/Product';
import Status from './components/Status';
import Styling from './components/Styling';

function App() {
  const handleClick = () => {
    console.log('Hii');
  };
  return (
    <div className='App'>
      <Status status='success' />
      <Optional price={4} />
      <Heading>This is heading</Heading>
      <Product>
        <Heading>This is product Heading</Heading>
      </Product>
      <Button handleClick={handleClick} />
      <Styling
        styles={{ border: '2px solid black', padding: '1rem', display: 'flex' }}
      />
    </div>
  );
}

export default App;

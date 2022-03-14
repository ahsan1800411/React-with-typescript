import './App.css';
import Greet from './components/Greet';
import Names from './components/Names';
import Person from './components/Person';

const name = {
  firstName: 'Ahsan',
  secondName: 'Mumtaz',
};

const studentNames = [
  { firstName: 'Ahsan', secondName: 'Mumtaz' },
  { firstName: 'Bilal', secondName: 'Tahir' },
  { firstName: 'Usman', secondName: 'Ghafoor' },
];

function App() {
  return (
    <div className='App'>
      <Greet name='Ahsan' messages={0} isLoggedIn />
      <Person fullName={name} />
      <Names studentNames={studentNames} />
    </div>
  );
}

export default App;

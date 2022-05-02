import './App.css';
import Dropdown from './components/atoms/Dropdown.tsx';

function App() {
  const items = [{value: 'Sagrado corazón', itemId: 5, name: 'Sagrado corazón'},{value: 'misericordioso', itemId: 3, name: 'misericordioso'},
{value: 'Sagrada familia', itemId: 4, name: 'Sagrada familia'},{value: 'Guadalupe', itemId: 8, name: 'Guadalupe'}];
  return (
    <div className="App">
        <h2>rtrrtrtrt</h2>
        <Dropdown items={items} label='CUADROS' id={5} testId='CUADROS' />
    </div>
  );
}

export default App;

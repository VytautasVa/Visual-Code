import './App.css';
import Accordion from './Components/Accordion';
import RandomColor from './Components/random-color';

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      <Accordion/>
      {/* Random color component */}
      <RandomColor/>
    </div>
  );
}

export default App;

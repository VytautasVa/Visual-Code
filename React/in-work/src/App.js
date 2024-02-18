import './App.css';
import Accordion from './Components/Accordion';
import RandomColor from './Components/random-color';
import StarRaiting from './Components/star-raiting';

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      <Accordion/>
      {/* Random color component */}
      <RandomColor/>
      {/* Star raiting component */}
      <StarRaiting noOfStars={10}/>
    </div>
  );
}

export default App;

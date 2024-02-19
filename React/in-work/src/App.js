import './App.css';
import Accordion from './Components/Accordion';
import RandomColor from './Components/random-color';
import StarRaiting from './Components/star-raiting';
import ImageSlider from './image-slider';

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion/> */}
      {/* Random color component */}
      {/* <RandomColor/> */}
      {/* Star raiting component */}
      {/* <StarRaiting noOfStars={10}/> */}
      {/* Image slider component */}
      <ImageSlider 
        url={"https://picsum.photos/v2/list"} 
        pages={'1'} 
        limit={'4'}/>
    </div>
  );
}

export default App;

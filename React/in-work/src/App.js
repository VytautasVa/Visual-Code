import './App.css';
import Accordion from './Components/Accordion';
import RandomColor from './Components/random-color';
import StarRaiting from './Components/star-raiting';
import ImageSlider from './Components/image-slider';
import LoadMoreData from './Components/load-more-data';
import TreeView from './Components/tree-view';
import menus from './Components/tree-view/data';
import QRCodeGenerator from './Components/QR-code-generator';
import LightDarkMode from './Components/light-dark-mode';
import ScrollIndicator from './Components/scroll-indicator';
import TabTest from './Components/custom-tabs/tab-test';

function App() {
  return (
    <div className="App">
      {/* <Accordion/>
      <RandomColor/>
      <StarRaiting noOfStars={10}/>
      <ImageSlider 
        url={"https://picsum.photos/v2/list"} 
        pages={'1'} 
        limit={'4'}/>
      <LoadMoreData/>
      <TreeView menus={menus}/>
      <QRCodeGenerator/>
      <LightDarkMode/>
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
      <TabTest/>
    </div>
  );
}

export default App;

import './App.css';
import image from './shopping.jpg';
import imageTwo from './man.jpg'
import { GroceryList } from './GroseryList';

function App() {
  return (
    <div className="App">
      <img src={image} width='250px' alt='foto'/>
      <h1>Grocery List</h1>
      <GroceryList/>
      <img src={imageTwo} width='250px' alt='foto'/>
    </div>
  );
}

export default App;

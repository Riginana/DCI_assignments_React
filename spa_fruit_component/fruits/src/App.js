import './App.css';
import FruitComp from './FruitComp'



function App() {

  return (
    <div className="App">
      <h1>Components</h1>
      <FruitComp color = "red" name = "Apple"/>
      <FruitComp color = "green" name = "Mango"/>
      <FruitComp color = "yellow" name = "Banana"/>
      <FruitComp color = "orange" name = "Lemon"/>
    </div>
  );
}

export default App;

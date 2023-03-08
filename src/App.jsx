import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  const incrementClick = () => {
    setCount((prev) => {
      return prev + 1
    })
  } 

  console.log("render");

  const decrimentClick = () =>{
    setCount((prev) => {
      return prev - 1
    })
  }

  return (
    <div className="App">
      <Header /> 

      <hr />
      {count}
      <hr />

      <button onClick={incrementClick}>Plus one</button>
      <button onClick={decrimentClick}>Minus one</button>
      <Main />

      <Footer />
    </div>
  );
}

export default App;

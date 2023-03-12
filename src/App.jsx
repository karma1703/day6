import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)



  return (
    <div className="App">
      <Header countInHeader={count} /> 

      <Main setCount={setCount}/>

      <Footer />
    </div>
  );
}

export default App;

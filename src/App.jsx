import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { useEffect, useState } from 'react';
import { Main } from './components/Main';
import { v4 as uuidv4 } from 'uuid';
import { LS_Token } from './Utils/constants';



function App() {

  const [todos, setTodos] = useState(() => {
    const todoList = localStorage.getItem(LS_Token)

    return todoList ? JSON.parse(todoList) : [] 
  })

  useEffect(() => {
    
    localStorage.setItem(LS_Token, JSON.stringify(todos))

  }, [todos])


  const addToList = (value) => {
  
      if(!value){
        return
      }
  
      const newTodo = {
        id: uuidv4(),
        title: value,
        status: false
      }
      setTodos((prev)=>[newTodo, ...prev])
  }

  const deleteOneTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const deleteList = () => {
    setTodos([])
  }

  return (
    <div className="App">
      <Header addToList = {addToList}/> 

      <Main todos={todos} deleteList={deleteList} deleteOneTodo={deleteOneTodo} />

      <Footer />
    </div>
  );
}

export default App;

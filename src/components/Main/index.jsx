export const Main = ({ todos, deleteList, deleteOneTodo }) => {

  if(!todos.length){
    return <p>ToDo лист пока пустой :/</p>
  }

  return (
    <main className="mt-3">
    <ol className="list-group">

      {todos.map((todo, index)=>{
        return <li key={todo.id} className="list-group-item">
          {`${index + 1}.  ` }
          <span>{todo.title}</span>
          <div data-actions>
            <button 
              type="submit" 
              onClick={() => deleteOneTodo(todo.id)} 
              className="btn btn-danger mx-3 "
              >
              Удалить
            </button>
            <button 
              type="submit" 
              onClick={() => console.log('Изменить')} 
              className="btn btn-warning mx-3"
              >
              Изменить
            </button>
          </div>
          </li>
          
      })}

    </ol>

    <button 
      type="submit" 
      onClick={deleteList} 
      className="btn btn-danger mt-3"
    >
      Удалить все
    </button>
    </main>
  )
}

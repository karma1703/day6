import { useState } from "react"

export const Form = ({ addToList }) => {

  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addToList(value)
    return setValue('')

  }

    return (
      <form onSubmit={(event) => handleSubmit(event)} className="d-flex flex-column align-items-center mt-3">
        <div className="mb-3">
          <input value={value}
          placeholder='Задача'
          onChange={(event)=>setValue(event.target.value)} 
          name='onetodo'
          type="text"
          className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Добавить</button>
      </form>      
    )
} 
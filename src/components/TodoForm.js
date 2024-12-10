import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        try{
            window.localStorage.setItem("todos", JSON.stringify({value}))
        } catch (error) {
          console.log(error)
        }
        addTodo(value);
        setValue("")
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='Add a new task...' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Add</button>
        </form>
    )
}

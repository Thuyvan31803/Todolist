import React, {useState} from 'react'

export const Edit = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();
        try{
            window.localStorage.setItem("todos", JSON.stringify({value}))
        } catch (error) {
          console.log(error)
        }
        editTodo(value, task.id);
        setValue("")
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder=' ' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Save</button>
        </form>
    )
}

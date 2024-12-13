import React from 'react'



export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className='Todo'>
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
            <div>
                <button type='submit' className='todo-btn1' onClick={() => editTodo(task.id)}>Edit</button>
                <button type='submit' className='todo-btn2' onClick={() => deleteTodo(task.id)}>Delete</button>
            </div>
        </div>
    )
}

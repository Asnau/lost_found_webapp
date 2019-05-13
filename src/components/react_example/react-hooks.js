import React, { useState } from 'react';

function Todo({todo, index, completeTodo, deleteTodo}) {
  return(
    <div className="todo" style={{textDecoration: todo.iscompleted ? 'line-through' : ''}}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return(
    <form onSubmit = {handleSubmit}>
      <input type="text" className="input" placeholder="add text" value={value} onChange={e => setValue(e.target.value)}></input>
    </form>
  )
}

function Test() {
  const [todos, setTodos] = useState([
    {
      text: 'hello',
      iscompleted: false
    },
    {
      text: 'hellooooo',
      iscompleted: false
    },
    {
      text: 'hello000000123',
      iscompleted: false
    }
  ]);

  const addTodo = text => {
    const NewTodos = [...todos, {text}];
    setTodos(NewTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].iscompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default Test;
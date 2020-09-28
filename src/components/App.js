import React from 'react';
import '../App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = React.useState([
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted=true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return(
    <div className="app">
      <div className="header-container">
        <div className="title">To Dos</div>
        {(todos.length == 1)
          ? <div> (You have 1 item in your todo list.) </div>
          : <div> (You have {todos.length} itmes in your todo list.) </div>
        }
      </div>
      <div className="todo-list-container">
        <div className="todo-list">
          {todos.map((todo, index)=> (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        <div className="todo-form-container">
          <TodoForm addTodo={addTodo} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;

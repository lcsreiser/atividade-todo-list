import { useState } from "react";
import Form from "../../components/Form";
import TodoList from "../../components/TodoList";

const TodosPage = () =>{
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
      setTodos([...todos, newTodo]);
    };
  
    const handleTodo = (itemRem) => {
      const itemFilt = todos.filter((item) => item !== itemRem);
      setTodos(itemFilt);
    };
    
    return(
        <div className="App">
          <div className="App-header">
              <Form addTodo={addTodo} />
              <TodoList todos={todos} handleTodo={handleTodo} />
          </div>
        </div>
    )
}

export default TodosPage;
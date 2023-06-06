import Button from "../Button";
import "./styles.css"

function TodoList({ todos, handleTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <div className="everyTodo" key={index}>
            <li className="liTodo">{todo}</li>
            <Button funcao={handleTodo} parametro={todo} textButton="Concluir"/>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
import { useState } from "react";
import Input from "../Input";
import Button from "../Button";

function Form({ addTodo }) {
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <Input userInput={userInput} setUserInput={setUserInput}/>
      <Button funcao={addTodo} parametro={userInput} setUserInput={setUserInput} textButton="Enviar"/>
    </div>
  );
}

export default Form;

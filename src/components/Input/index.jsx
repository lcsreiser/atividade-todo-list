const Input = (props) =>{
  console.log(props)
    return(
        <input
        type="text"
        value={props.userInput}
        placeholder="Digite aqui"
        onChange={(event) => props.setUserInput(event.target.value)}
      />
    )
}

export default Input
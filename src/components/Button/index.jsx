const Button = ({funcao, parametro, setUserInput, textButton}) =>{
    if(setUserInput){
        return(
            <button onClick={() =>{
                funcao(parametro)
                setUserInput("")
            }}>"{textButton}"</button>
        )
    }else{
        return(
            <button onClick={() =>{
                funcao(parametro)
            }}>{textButton}</button>
        )
    }
}

export default Button
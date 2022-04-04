import { useState } from "react"
import "./index.css"
export default function Form({addTodo}){
    const [inputContent, setInputContent] = useState("")
    return(
        <div className="todo-form">
            <input
            type="text" 
            value={inputContent} 
            onChange={(event)=> setInputContent(event.target.value)}>
            </input>
            <button onClick={() => addTodo(inputContent)}>Enviar</button>
        </div>
    )
}
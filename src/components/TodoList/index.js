import "./index.css"
export default function TodoList({todos,handleTodo}){
    return(
        <ul className="todo__ul">
            {todos.map((itemAtual, index)=>{
                return(
                    <div className="todo__item" key={index}>
                        <li>{itemAtual}</li>
                        <button onClick={()=>handleTodo(itemAtual)}>Remover</button>
                    </div>
                )
            })}
        </ul>
    )
}
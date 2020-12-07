import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../../action/index'

function List(props) {
    return (
       <ul >
           {props.todos.map((todo,index)=>
           <table>
           <li key={index}>{todo.message}<button onClick={()=>{ props.dispatch(deleteTodo(todo.id))}}>Delete</button></li>
           </table>
           )}
       </ul>
    )
}
const mapStateToProps =(state)=> ({
    todos: state.todos.data
})

export default connect(mapStateToProps)(List);

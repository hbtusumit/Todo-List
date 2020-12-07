import React from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../../action'


const AddTodo = (props) => {
    return (
            <form onSubmit={(e)=>{
            e.preventDefault()
            const input=e.target.userInput.value;
            props.dispatch(addTodo(input));
            e.target.userInput.value = "";
            
           }}>
                <input type="text" name="userInput"/>
                <button>Add Todo</button>
            </form>
    )
}

export default connect()(AddTodo);

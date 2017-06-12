import React from 'react';
import { connect } from "react-redux";
import { addTodo } from "../actions";

let AddTodo = ({ dispatch }) => {
	let input;
	return (
		<div>
			<form onSubmit={ e => {
				e.preventDefault();
				if (!input.value.trim())
				{ return }
				dispatch(addTodo(input.value))
			  input.value = ""
			}}>
				<input placeholder="你想做点什么" ref={r => input = r} className="todo-input" />
				<button type="submit" className="todo-btn">
					添加任务
				</button>
			</form>
		</div>
	);
}
AddTodo = connect()(AddTodo);

export default AddTodo;
import React from 'react'

const Todo = ({ onClick, completed, text }) => (
	<li className="todo-list_li" style={{ textDecoration:completed ? "line-through" : "none" }}>
		<input type="checkbox" className="pull-left" onClick={onClick} defaultChecked={completed} />
		{text}
	</li>
)

export default Todo
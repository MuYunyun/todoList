import React from 'react';
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Top from './Top';
import './index.css'

const App = () => (
	<div className="todo-box">
		<div className="todo-innerBox">
			<Top />
			<VisibleTodoList />
			<AddTodo />
		</div>
	</div>
);

export default App;
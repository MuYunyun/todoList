import React from 'react'
import Todo from "./Todo"
import { toggleTodo } from "../actions"
import { useStoreContext } from '../redux'

const TodoList = () => {
	const [store, dispatch] = useStoreContext()
	const { TodosStore, FilterStore } = store
	const { active } = FilterStore

	const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case "SHOW_ALL":
        return todos;
      case "SHOW_COMPLETED":
        return todos.filter(t => t.completed);
      case "SHOW_ACTIVE":
        return todos.filter(t => !t.completed);
    }
  }

	return (
    <ul className="list-group">
      {TodosStore &&
        getVisibleTodos(TodosStore, active).map(todo => (
          <Todo
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            {...todo}
          />
        ))}
    </ul>
  )
}

export default TodoList
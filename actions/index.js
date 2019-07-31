/* 顶部显示状态 */
export const setVisibility = (filter) => {
	return {
		type: "SET_VISIBILITY",
		filter: {
			active: filter
		}
	}
}

let nextTodoId = 0

/* 添加 */
export const addTodo = (text) => {
	return {
		type: 'ADD_TODO', // 必填
		id: nextTodoId++,
		text
	}
}

/* 触发 */
export const toggleTodo = (id) => {
	return {
		type: "TOGGLE_TODO",
		id
	}
}
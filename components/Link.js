import React from 'react'
import { useStoreContext } from '../redux'

// const { useState } = React

const Link = ({ active = true, children }) => {
	const [state, dispatch] = useStoreContext()
	// const [a, setA] = useState(1)

	console.log('12345', state)

	return (
		<div className="todo-tab_item">
			<a href = "#" style={{ color: active? '#f01414' : '#4d555d' }}
				onClick = {
					e => {
						e.preventDefault()
					}
				}>
				{children}
			</a>
		</div>
	)
}

export default Link
import React from 'react'
import Link from './Link'

const Top = () => {
	return (
		<div className="todo-tab">
			<Link filter="SHOW_ALL">全部任务</Link>
			<Link filter="SHOW_ACTIVE">待办任务</Link>
			<Link filter="SHOW_COMPLETED">已完成任务</Link>
		</div>
	)
}

export default Top
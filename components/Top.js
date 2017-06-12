import React from 'react';
import FilterLink from '../containers/FilterLink';

const Top = () => (
	<div className="todo-tab">
		<FilterLink filter="SHOW_ALL">
			全部任务
		</FilterLink>
		<FilterLink filter="SHOW_ACTIVE">
			待办任务
		</FilterLink>
		<FilterLink filter="SHOW_COMPLETED">
			已完成任务
		</FilterLink>
	</div>
)

export default Top;
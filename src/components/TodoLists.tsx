import React from 'react';
import { DataType } from '../App';
interface TodoProps {
	todos:DataType[]
}
const TodoLists = ({todos}:TodoProps) => {
	return (
		<div>
			<ul>
				{todos.map(todo=><li>{todo.text}</li>)}
			</ul>
		</div>
	);
};

export default TodoLists;
import React, { useState } from 'react';

const Count = () => {
	const [ count, setCount ] = useState<number>(0);
	const onIncrease = () => {
		setCount(count+1);
	}
	const onDecrease = () => {
		setCount(count-1);
	}
	return (
		<div>
			<h2>{count}</h2>
			<div>
				<button onClick={onIncrease}>+</button>
				<button onClick={onDecrease}>-</button>
			</div>
		</div>
	);
};

export default Count;
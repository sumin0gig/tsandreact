import React from 'react';

interface HelloProps {
	name:string;
	message: string;
	onClick:(text:string)=>void;
}
const Hello = ({name, message, onClick}:HelloProps) => {
	return (
		<div>
			<h2>{name}</h2>
			<p>{message}</p>
			<button onClick={()=>onClick(name)}>클릭하세요</button>
		</div>
	);
};

export default Hello;
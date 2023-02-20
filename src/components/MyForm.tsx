import React, { useState } from 'react';
interface MyFormProps {
	onDataPrint:(data:{name:string, desc:string})=>void;
}
const MyForm = ({onDataPrint}:MyFormProps) => {
	const [ formData, setFormData ] = useState({
		name:"",
		desc: ""
	})
	const onChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]:value
		})
	} 
	const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onDataPrint(formData);
		setFormData({
			name:"",
			desc:""
		})
	}
	return (
		<div>
			<form onSubmit={onSubmit}>
			<input name="name" value={formData.name} onChange={onChange}/>
			<input name="desc" value={formData.desc} onChange={onChange}/>
			<button type="submit">등록</button>
			</form>
		</div>
	);
};

export default MyForm;
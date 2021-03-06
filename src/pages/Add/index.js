import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../../store/cars';

import {Creators} from '../../store/layout'
export default function Add() {
	const [form, setForm] = useState([{name: '',url: ''}])
	const dispatch = useDispatch();
	
	function formChange(e){
		setForm({...form, [e.target.name]:e.target.value})
	}
	
	function onSubmit(e){
			e.preventDefault();
		const { showMessage, hideMessage } = Creators;
			dispatch(addCar(form));
			dispatch(showMessage());
			setForm({name :'',url:''});
			setTimeout( () =>{
					dispatch(hideMessage());
			},2000)
	}

	return (
		<form className="container mt-5" onSubmit={onSubmit}>
			<div className="form-group">
				<label>Nome</label>
				<input type="text" name="name" className="form-control" placeholder="Nome..." onChange={formChange} value={form.name}/>
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input type="text" name="url" className="form-control" placeholder="URL:https://cars" onChange={formChange} value={form.url}/>
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}

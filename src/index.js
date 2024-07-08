import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from "react"; 

export default function Form() { 
	const [name, setName] = useState(""); 
	const [email, setEmail] = useState(""); 
	const [password, setPassword] = useState(""); 
  	const [passwordVerif, setPasswordVerif] = useState=("");
	const [submitted, setSubmitted] = useState(false); 
	const [error, setError] = useState(false); 

	const handleName = (e) => { 
		setName(e.target.value); 
		setSubmitted(false); 
	}; 

	const handleEmail = (e) => { 
		setEmail(e.target.value); 
		setSubmitted(false); 
	}; 

	const handlePassword = (e) => { 
		setPassword(e.target.value); 
		setSubmitted(false); 
	}; 

    const verifyPassword = (e) => {
    	if (this.state.password !== this.state.passwordVerif){
      		return this.setAlertMessage("Passwords must match!");
    	} else {
      		setSubmitted(false);
    	}
    }

	const handleSubmit = (e) => { 
		e.preventDefault(); 
		if (name === "" || email === "" || password === "") { 
			setError(true); 
		} else { 
			setSubmitted(true); 
			setError(false); 
		} 
	}; 

	const successMessage = () => { 
		return ( 
			<div 
				className="success"
				style={{ 
					display: submitted ? "" : "none", 
				}} 
			> 
				<h1>User {name} successfully registered!!</h1> 
			</div> 
		); 
	}; 

	const errorMessage = () => { 
		return ( 
			<div 
				className='bg-red-600'
				style={{ 
					display: error ? "" : "none", 
				}} 
			> 
				<h1>Fill all fields!</h1> 
			</div> 
		); 
	}; 

	{}
	return ( 
		<div className='content-center w-50% h-100%'> 
			<div> 
				<h1 className='font-semibold text-6xl pt-50px pl-30px'>Sign up</h1> 
			</div> 
      
			<div className="flex-auto content-center"> 
				{errorMessage()} 
				{successMessage()} 
			</div> 

			<form> 
				{}
				<input 
					onChange={handleName} 
					className="input"
					value={name} 
					type="text"
					placeholder="your name"
				/> 

				<input 
					onChange={handleEmail} 
					className="input"
					value={email} 
					type="email"
					placeholder="Your email"
				/> 

				<input 
					onChange={handlePassword} 
					className="input"
					value={password} 
					type="password"
					placeholder="Password"
				/> 

				<input 
					onChange={verifyPassword} 
					className="input"
					value={password} 
					type="password"
					placeholder="Password"
				/>

				<button onClick={handleSubmit} className="btn" type="submit"> 
					Register 
				</button> 
			</form> 
		</div> 
	); 
} 


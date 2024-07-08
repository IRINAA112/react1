import React from 'react';
import './index.css';
import { useState } from "react"; 

function Form() { 
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
			setPasswordVerif(e.target.value);
      		setSubmitted(false);
    	}
    }

	const handleSubmit = (e) => { 
		e.preventDefault(); 
		if (name === "" || email === "" || password === "" || passwordVerif === "") { 
			setError(true); 
		} else { 
			setSubmitted(true); 
			setError(false); 
		} 
	}; 

	const successMessage = () => { 
		return ( 
			<div 
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
      
			<div className="flex-auto content-center"> 
				{errorMessage()} 
				{successMessage()} 
			</div> 

			<form> 
				{}
				<input 
					onChange={handleName} 
					value={name} 
					type="text"
					placeholder="your name"
				/> 

				<input 
					onChange={handleEmail} 
					value={email} 
					type="email"
					placeholder="Your email"
				/> 

				<input 
					onChange={handlePassword} 
					value={password} 
					type="password"
					placeholder="Password"
				/> 

				<input 
					onChange={verifyPassword} 
					value={passwordVerif} 
					type="password"
					placeholder="Repeat password"
				/>

				<button onClick={handleSubmit} type="submit"> 
					Register 
				</button> 
			</form> 
		</div> 
	); 
} 

export default Form;
import React, { Component } from 'react';
import FormInput from '../form-input/form-input.jsx';
import CustomButton from '../custom-button/custom-button.jsx';
import { signInWithGoogle } from '../../firebase/firebase.utils.jsx';

import './sign-in.scss';

export class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						value={this.state.email}
						type="email"
						handleChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						name="password"
						value={this.state.password}
						type="password"
						handleChange={this.handleChange}
						label="password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">SIGN IN</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							SIGN IN WITH GOOGLE
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;

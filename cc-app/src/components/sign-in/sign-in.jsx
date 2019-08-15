import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.jsx';
import CustomButton from '../custom-button/custom-button.jsx';

import {
	googleSignInStart,
	emailSignInStart
} from '../../redux/user/user.actions.js';

import './sign-in.scss';

export class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = async e => {
		e.preventDefault();

		const { emailSignInStart } = this.props;
		const { email, password } = this.state;

		emailSignInStart(email, password);
	};

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};
	render() {
		const { googleSignInStart } = this.props;
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
						<CustomButton
							type="button"
							onClick={googleSignInStart}
							isGoogleSignIn
						>
							SIGN IN WITH GOOGLE
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password }))
});

export default connect(
	null,
	mapDispatchToProps
)(SignIn);

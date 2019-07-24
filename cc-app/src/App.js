import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions.js';
import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx';
import Header from './components/header/header.jsx';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.jsx';

import './App.css';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInSignUp} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
	null,
	mapDispatchToProps
)(App);

import { Provider } from 'react-redux';
import GlobalState from '../reducers/reducers';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import App from './App';
import { questions } from '../assets/mock-data';
import { applyMiddleware } from 'redux';

export default class ReduxProvider extends React.Component {
	constructor(props) {
		super(props);
		this.initialState = { 
			score: 0,
			finished: false,
			currentQuestion: 0,
			questions: [ ...questions ],
			countDown: {
				min: 0,
				sec: 50,
				running: false
			}
		};
		this.store = this.configureStore(); 
	}

	render() {

		return (
			<Provider store = {this.store}>
				<div style = {{height: '100%'}}>
					<App store = {this.store} />
				</div>
			</Provider>
		);
	}

	configureStore() {
		return createStore(GlobalState, this.initialState, applyMiddleware(thunk));
	}
}
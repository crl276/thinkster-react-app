import App from './App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';	

//set default state equal 
const defaultState = { appName: 'CONDUIT' };
const reducer = function(state = defaultState, action) {
	switch (action.type) {
		case 'TOGGLE':
			return { ...state, checked: !state.checked };
	}
	return state;
};
const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render((
  <Provider store={ store }>
    <App />
  </Provider>
), document.getElementById('main'));
import './App.css';

import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Contact from './Contact/Contact';
import Home from './Home/Home';
import React from 'react';

function App() {
	return (
		<Router>
			<div className="App">
				<div className="container-fluid">
					<Switch>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</div>
			
		</Router>
	);
}

export default App;

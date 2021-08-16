import './App.css';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import React from 'react';

function App() {
	return (
		<Router>
			<div className="App">
				<div className="container-fluid  navbar-padding">
					<Switch>
						<Route path="/contact">
							<Navbar linkAddress="/" linkDisplayName="home"/>
							<Contact />
						</Route>
						<Route path="/">
							<Navbar linkAddress="/contact" linkDisplayName="contact"/>
							<Home />
						</Route>
					</Switch>
				</div>
			</div>
			
		</Router>
	);
}

export default App;

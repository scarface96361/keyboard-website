import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
//import About from './pages/about';
import Keyboards from './pages/keyboards';
import Projects from './pages/projects';
/* import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup'; */

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/home' element={<Home/>} />
		<Route path='/keyboards' element={<Keyboards/>} />
		<Route path='/projects' element={<Projects/>} />
		{/* <Route path='/team' element={<Teams/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/sign-up' element={<SignUp/>} /> */} 
	</Routes>
	</Router>
);
}

export default App;

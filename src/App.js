import React from 'react'
import { Route } from 'react-router-dom'
// import './App.css'
import HomePage from './components/HomePage/HomePage'
import SetRecipe from './components/SetRecipe/SetRecipe'

function App() {
	return (
		<div className='App'>
			<HomePage />
			<Route path='/edit' component={SetRecipe} />
		</div>
	)
}

export default App

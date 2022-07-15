import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader  = () => {
	return (<h1>My Todo list</h1>);
};

const SearchPanel  = () => {
	return (
		<input placeholder = "search" />
	);
};

const Todolist  = () => {
	
	const items = [ 'Drink Coffee', 'Build Awesome App' ]
	
	return (
		<ul>
			<li>{ items[0] }</li>
			<li>{ items[1] }</li>
		</ul>
	);
};

const App = () => {
	return (
	<div>
		<AppHeader/>
		<SearchPanel/>
		<Todolist/>
	</div>
	);
};
	
ReactDOM.render(<App/>,
  document.getElementById('root'));
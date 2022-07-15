import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader  = () => {
	return (<h1>My Todo list</h1>);
};

const SearchPanel  = () => {
	const searchText = 'Type here to search';
	const searchStyle = { fontSize: '20px' };
	
	return <input 
		style = {searchStyle}
		placeholder = {searchText} />;
};

const Todolist  = () => {
	
	const items = [ 'Drink Coffee', 'Build Awesome App' ];
	
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
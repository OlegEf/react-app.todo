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
	return (
		<ul>
			<li>Learn React</li>
			<li>Build Awesome App</li>
		</ul>
	);
};

const el = (
	<div>
		<AppHeader/>
		<SearchPanel/>
		<Todolist/>
	</div>
);

ReactDOM.render(el,
  document.getElementById('root'));
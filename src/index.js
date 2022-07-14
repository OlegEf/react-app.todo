import React from 'react';
import ReactDOM from 'react-dom';

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
		<h1>My Todo list</h1>
		<input placeholder = "search" />
		<Todolist/>
	</div>
);

ReactDOM.render(el,
  document.getElementById('root'));
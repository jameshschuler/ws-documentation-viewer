import React, { useState } from 'react';

function Navbar() {
	const [appTitle, setAppTitle] = useState(import.meta.env.VITE_APP_TITLE || 'WS Docs');

	return (
		<nav className='navbar has-background-info' role='navigation' aria-label='main navigation'>
			<div className='navbar-brand'>
				<a className='navbar-item' href='https://bulma.io'>
					<h2 className='is-size-3 has-text-white'>{appTitle}</h2>
				</a>
			</div>
		</nav>
	);
}

export default Navbar;

import React, { useEffect, useState } from 'react';

function Footer() {
	const [randoColor, setRandoColor] = useState<string>('fdca40');

	useEffect(() => {
		setRandoColor(Math.floor(Math.random() * 16777215).toString(16));
	}, []);

	return (
		<footer className='footer py-3 mt-5 has-background-info has-text-white'>
			<div className='content has-text-centered'>
				<p>
					Built with <i className='fas fa-fw fa-mug-hot mx-1' style={{ color: `#${randoColor}` }}></i> by James Schuler
				</p>
				<p>
					<a className='has-text-white' href='https://github.com/jameshschuler/ws-documentation-viewer' target='_blank'>
						<i className='fab fa-fw fa-lg fa-github'></i>
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;

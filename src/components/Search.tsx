import React from 'react';

function Search() {
	return (
		<div className='box my-5'>
			<h1 className='is-size-3 mb-3'>Filter by...</h1>
			<div className='field'>
				<p className='control has-icons-right'>
					<input className='input' type='text' placeholder='ex. Catalog Management' />
					<span className='icon is-small is-right'>
						<i className='fas fa-fw fa-search'></i>
					</span>
				</p>
			</div>
		</div>
	);
}

export default Search;

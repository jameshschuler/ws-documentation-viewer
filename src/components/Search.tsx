import React from 'react';
import { FilterBy } from '../models/filterBy';

interface SearchProps {
	setFilterBy: Function;
}

function Search({ setFilterBy }: SearchProps) {
	function search(query: string) {
		const filterBy = {
			query,
		} as FilterBy;

		setFilterBy(filterBy);
	}

	return (
		<div className='box my-5'>
			<h1 className='is-size-3 mb-3'>Filter by...</h1>
			<div className='field'>
				<p className='control has-icons-right'>
					<input
						className='input'
						type='text'
						name='query'
						placeholder='ex. Catalog Management'
						onKeyUp={(e: any) => search(e.target.value)}
					/>
					<span className='icon is-small is-right'>
						<i className='fas fa-fw fa-search'></i>
					</span>
				</p>
			</div>
		</div>
	);
}

export default Search;

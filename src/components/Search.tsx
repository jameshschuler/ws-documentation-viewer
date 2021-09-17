import React from 'react';
import { FilterBy } from '../models/filterBy';

interface SearchProps {
	allowFilteringByTag: boolean;
	allowFilteringByType: boolean;
	tags: string[];
	types: string[];
	setFilterBy: Function;
}

function Search({ allowFilteringByTag, allowFilteringByType, tags, types, setFilterBy }: SearchProps) {
	function search(query: string) {
		const filterBy = {
			query,
			tags: [],
			types: [],
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

			{allowFilteringByType && types.length !== 0 && (
				<div className='buttons'>
					{types.map((type: string, index: number) => {
						return (
							<button className='button is-success is-outlined' key={index}>
								{type}
							</button>
						);
					})}
				</div>
			)}
			{allowFilteringByTag && tags.length !== 0 && (
				<div className='buttons'>
					{tags.map((tag: string, index: number) => {
						return (
							<button className='button is-success is-outlined' key={index}>
								{tag}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default Search;

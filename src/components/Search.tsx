import React, { useEffect, useState } from 'react';
import { FilterBy } from '../models/filterBy';

interface SearchProps {
	allowFilteringByTag: boolean;
	allowFilteringByType: boolean;
	tags: string[];
	types: string[];
	setFilterBy: Function;
}

function Search({ allowFilteringByTag, allowFilteringByType, tags, types, setFilterBy }: SearchProps) {
	const [filterState, setFilterState] = useState<FilterBy>({
		query: null,
		tags: [],
		types: [],
	});

	useEffect(() => {
		setFilterBy(filterState);
	}, [filterState]);

	function search(query: string) {
		const filterBy = {
			...filterState,
			query,
		} as FilterBy;

		setFilterState(filterBy);
	}

	function toggleTagFilter(tag: string) {}

	function toggleTypeFilter(type: string) {
		let types = new Array<string>();

		if (!filterState.types.includes(type)) {
			types = [...filterState.types, type];
		} else {
			types = filterState.types.filter((t) => t !== type);
		}

		const filterBy = {
			...filterState,
			types,
		} as FilterBy;

		setFilterState(filterBy);
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
							<button
								className={`button is-info ${!filterState.types.includes(type) && 'is-outlined'}`}
								key={index}
								onClick={() => toggleTypeFilter(type)}
							>
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
							<button
								className={`button is-info is-outlined ${!filterState.tags.includes(tag) && 'is-outlined'}`}
								key={index}
								onClick={() => toggleTagFilter(tag)}
							>
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

import React, { useEffect, useState } from 'react';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { FilterBy } from './models/filterBy';
import { Doc, getDocumentationData } from './service/dataService';
import './styles/app.scss';

function App() {
	const [docs, setDocs] = useState<Doc[]>([]);
	const [filteredDocs, setFilteredDocs] = useState<Doc[]>([]);
	const [filterBy, setFilterBy] = useState<FilterBy>({
		query: null,
		tags: [],
		types: [],
	});
	const [allowFilteringByTag, setAllowFilteringByTag] = useState<boolean>();
	const [allowFilteringByType, setAllowFilteringByType] = useState<boolean>();
	const [tags, setTags] = useState<string[]>([]);
	const [types, setTypes] = useState<string[]>([]);

	useEffect(() => {
		setAllowFilteringByTag(Boolean(import.meta.env.VITE_ALLOW_FILTERING_BY_TAG));
		setAllowFilteringByType(Boolean(import.meta.env.VITE_ALLOW_FILTERING_BY_TYPE));

		const data = getDocumentationData();

		if (data && data.length !== 0) {
			const tags = data
				.map((doc: Doc) => {
					return doc.tags && doc.tags.length !== 0 ? doc.tags : [];
				})
				.flat();
			setTags([...new Set(tags)]);

			const types = data.map((doc: Doc) => {
				return doc.type && doc.type !== '' ? doc.type : '';
			});

			setTypes([...new Set(types)]);
		}

		setDocs(data);
	}, []);

	useEffect(() => {
		setFilteredDocs(docs);
	}, [docs]);

	useEffect(() => {
		filterDocs();
	}, [filterBy]);

	function filterDocs() {
		let filtered = docs;

		if (filterBy.query && filterBy.query !== '') {
			filtered = filtered.filter((doc: Doc) => {
				return doc.name.toLowerCase().includes(filterBy.query!.toLowerCase());
			});
		}

		if (filterBy.types.length !== 0) {
			filtered = filtered.filter((doc: Doc) => {
				return filterBy.types.includes(doc.type);
			});
		}

		if (filterBy.tags.length !== 0) {
			filtered = filtered.filter((doc: Doc) => {
				return doc.tags.some((t: string) => filterBy.tags.indexOf(t) >= 0);
			});
		}

		setFilteredDocs(filtered);
	}

	return (
		<>
			<Navbar />
			<div className='container is-fluid'>
				<div className='columns'>
					<div className='column is-10 is-offset-1'>
						<div className='box mt-5'>
							<Search
								allowFilteringByTag={allowFilteringByTag || false}
								allowFilteringByType={allowFilteringByType || false}
								tags={tags}
								types={types}
								setFilterBy={setFilterBy}
							/>
							<CardList docs={filteredDocs} query={filterBy.query} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;

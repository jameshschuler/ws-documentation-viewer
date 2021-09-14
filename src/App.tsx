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
	const [filterBy, setFilterBy] = useState<FilterBy>({});
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
				.map((e) => {
					return e.tags && e.tags.length !== 0 ? e.tags : [];
				})
				.flat();
			setTags([...new Set(tags)]);

			const types = data.map((e) => {
				return e.type && e.type !== '' ? e.type : '';
			});

			setTypes([...new Set(types)]);
		}

		setDocs(data);
	}, []);

	useEffect(() => {
		setFilteredDocs(docs);
	}, [docs]);

	useEffect(() => {
		if (filterBy.query && filterBy.query !== '') {
			setFilteredDocs(
				docs.filter((doc: Doc) => {
					if (filterBy.query) {
						return doc.name.toLowerCase().includes(filterBy.query.toLowerCase());
					}

					return doc;
				})
			);
		} else {
			setFilteredDocs(docs);
		}
	}, [filterBy]);

	return (
		<>
			<Navbar />
			<div className='container is-fluid'>
				<div className='columns'>
					<div className='column is-10 is-offset-1'>
						<div className='box mt-5'>
							<h1 className='is-size-2'>Hey hey!</h1>
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

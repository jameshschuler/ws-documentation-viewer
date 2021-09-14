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

	useEffect(() => {
		const data = getDocumentationData();

		// TODO: get unique array of tags and unique array of types to place to Search component to allow the user to filter by those
		setDocs(data);
		setFilteredDocs(data);
	}, []);

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
							<Search setFilterBy={setFilterBy} />
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

import React, { useEffect, useState } from 'react';
import { Doc } from '../service/dataService';
import BookmarkedDocs from './BookmarkedDocs';
import Card from './Card';

interface CardListProps {
	docs: Doc[];
	query: string | null;
}

function CardList({ docs, query }: CardListProps) {
	const [bookmarkedDocs, setBookmarkedDocs] = useState<Array<Doc>>([]);

	useEffect(() => {
		// TODO: load bookmarkedDocs from localstorage
	}, []);

	function isBookmarked(id: number) {
		return bookmarkedDocs.find((d) => d.id === id) !== undefined;
	}

	function toggleBookmark(doc: Doc) {
		if (bookmarkedDocs.find((d) => d.id === doc.id)) {
			const filtered = bookmarkedDocs.filter((d: Doc) => d.id !== doc.id);
			setBookmarkedDocs(filtered);
		} else {
			setBookmarkedDocs([...bookmarkedDocs, doc]);
		}
	}

	return (
		<>
			<BookmarkedDocs bookmarkedDocs={bookmarkedDocs} toggleBookmark={toggleBookmark} />
			<div className='columns is-multiline'>
				{docs.length === 0 && (
					<div className='column is-half is-offset-one-quarter'>
						<div className='notification is-info is-light my-2'>
							<p className='is-size-5 has-text-centered'>No documents were found matching '{query}'. Maybe try changing your query?</p>
						</div>
					</div>
				)}
				{docs.length !== 0 &&
					docs.map((doc: Doc) => {
						return <Card key={doc.id} doc={doc} toggleBookmark={toggleBookmark} isBookmarked={isBookmarked(doc.id)} />;
					})}
			</div>
		</>
	);
}

export default CardList;

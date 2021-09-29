import React from 'react';
import { Doc } from '../service/dataService';
import Card from './Card';

interface BookmarkedDocsProps {
	bookmarkedDocs: Array<Doc>;
	toggleBookmark: Function;
}

function BookmarkedDocs({ bookmarkedDocs, toggleBookmark }: BookmarkedDocsProps) {
	return bookmarkedDocs.length !== 0 ? (
		<div className='box mb-5 mt-3'>
			<h1 className='is-size-4 mb-3'>Bookmarked</h1>
			<div className='columns is-multiline'>
				{bookmarkedDocs.map((doc: Doc) => {
					return <Card doc={doc} isBookmarked={true} toggleBookmark={toggleBookmark} key={doc.id} />;
				})}
			</div>
		</div>
	) : (
		<></>
	);
}

export default BookmarkedDocs;

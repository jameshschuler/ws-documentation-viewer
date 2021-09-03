import React, { useEffect } from 'react';
import { Doc } from '../service/dataService';
import Card from './Card';

interface CardListProps {
	docs: Doc[];
	query?: string;
}

function CardList({ docs, query }: CardListProps) {
	useEffect(() => {}, [docs]);

	return (
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
					return <Card key={doc.id} doc={doc} />;
				})}
		</div>
	);
}

export default CardList;

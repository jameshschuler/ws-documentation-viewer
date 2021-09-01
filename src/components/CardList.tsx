import React from 'react';
import Card from './Card';

function CardList() {
	return (
		<div className='columns is-multiline'>
			{[0, 0, 0, 0, 0].map((data: any, index: number) => {
				return <Card key={index} />;
			})}
		</div>
	);
}

export default CardList;

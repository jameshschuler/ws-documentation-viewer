import React from 'react';
import { Doc } from '../service/dataService';

interface CardProps {
	doc: Doc;
}

function Card({ doc }: CardProps) {
	function getTagColor(type: string) {
		let colorClass = 'is-info';

		switch (type) {
			case 'Web Service':
				colorClass = 'is-success';
				break;
			case 'Library':
				colorClass = 'is-warning';
				break;
		}

		return colorClass;
	}

	return (
		<div className='column is-4'>
			<div className='card'>
				<div className='card-header'>
					<h1 className='card-header-title is-justify-content-center is-align-items-center is-justify-content-space-between'>
						<span>
							{doc.name}
							<span className={`tag ml-2 is-light ${getTagColor(doc.type)}`}>{doc.type}</span>
							{doc.tags.map((tag: string, index: number) => {
								return (
									<span className='tag ml-2 is-info is-light' key={index}>
										{tag}
									</span>
								);
							})}
						</span>
						<a href={doc.url} target='_blank'>
							<i className='fas fa-fw fa-external-link-alt'></i>
						</a>
					</h1>
				</div>
				<div className='card-content'>
					<div className='content'>
						Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;

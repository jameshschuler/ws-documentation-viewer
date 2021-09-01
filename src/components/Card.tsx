import React from 'react';

function Card() {
	return (
		<div className='column is-4'>
			<div className='card'>
				<div className='card-header'>
					<h1 className='card-header-title is-justify-content-center is-align-items-center is-justify-content-space-between'>
						Name
						<span>
							<i className='fas fa-fw fa-external-link-alt'></i>
						</span>
					</h1>
				</div>
				<div className='card-content'>
					<div className='content'>
						Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum
						sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet
						fermentum.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;

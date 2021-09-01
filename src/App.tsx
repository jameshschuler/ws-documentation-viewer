import React from 'react';
import CardList from './components/CardList';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<div className='container is-fluid'>
				<div className='columns'>
					<div className='column is-10 is-offset-1'>
						<div className='box mt-5'>
							<h1 className='is-size-2'>Welcome!</h1>
							<div className='card my-5'>
								<div className='card-content'>
									<div className='content'>
										Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget
										metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis
										consectetur purus sit amet fermentum.
									</div>
								</div>
							</div>
							<CardList />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

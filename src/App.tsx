import React from 'react';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/Search';
import './styles/app.scss';

function App() {
	return (
		<>
			<Navbar />
			<div className='container is-fluid'>
				<div className='columns'>
					<div className='column is-10 is-offset-1'>
						<div className='box mt-5'>
							<h1 className='is-size-2'>Welcome!</h1>
							<Search />
							<CardList />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;

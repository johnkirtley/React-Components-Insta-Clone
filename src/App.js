import React, { useState, useEffect } from 'react';
import './App.css';
import './components/SearchBar/SearchBar.css';
import PostsPage from './components/PostsContainer/PostsPage';
import DummyData from './dummy-data';

const App = () => {
	const [data] = useState(DummyData);
	const [search, setSearch] = useState('');

	const handleChange = (e) => {
		setSearch(e.target.value);
		console.log(search);
	};

	const filteredData = data.filter((item) =>
		item.username.toLowerCase().includes(search)
	);

	return (
		<div className='App'>
			{' '}
			<div className='search-bar-wrapper'>
				<div className='image-wrapper'>
					<i className='fab fa-instagram' />
					<p className='instagramTitle'>Instagram</p>
				</div>
				<form className='search-form'>
					<input type='text' placeholder='Search' onChange={handleChange} />
				</form>
				<div className='social-wrapper'>
					<div className='social'>
						<i className='far fa-compass' />
					</div>
					<div className='social'>
						<i className='far fa-heart' />
					</div>
					<div className='social'>
						<i className='far fa-user-circle' />
					</div>
				</div>
			</div>
			<PostsPage data={filteredData.length === 0 ? data : filteredData} />
		</div>
	);
};

export default App;

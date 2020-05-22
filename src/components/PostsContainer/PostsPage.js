import React from 'react';
import Post from './Post';
import './Posts.css';

const PostsPage = (props) => {
	return (
		<div className='posts-container-wrapper'>
			{props.data.map((p) => (
				<Post data={p} />
			))}
		</div>
	);
};

export default PostsPage;

import React, { useState, useEffect } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = (props) => {
	const [comments, setComments] = useState(props.comments);

	return (
		<div>
			{' '}
			{console.log('comments', comments)}
			{comments.map((e) => (
				<Comment comment={e} />
			))}
			<div className='comment-style'>
				<CommentInput existingComments={props.comments} />
				<p onClick={() => alert('No options to display at the moment')}>•••</p>
			</div>
		</div>
	);
};

export default CommentSection;

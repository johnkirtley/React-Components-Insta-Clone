import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = (props) => {
	return (
		<div>
			{' '}
			{props.comments.map((e) => (
				<Comment comment={e} />
			))}
			<div className='comment-style'>
				<CommentInput />
				<p>•••</p>
			</div>
		</div>
	);
};

export default CommentSection;

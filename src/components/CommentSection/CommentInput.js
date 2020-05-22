import React, { useState } from 'react';

const CommentInput = (props) => {
	const [newText, setNewText] = useState({});
	const [updated, setUpdated] = useState(props.existingComments);

	const handleChanges = (e) => {
		setNewText({
			username: 'New User',
			text: e.target.value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		let input = document.getElementById('comment-input');
		let update = props.existingComments.push(newText);
		setUpdated(update);
		console.log(props.existingComments);
		input.value = null;
	};

	return (
		<form className='comment-form' onSubmit={onSubmit}>
			<input
				className='comment-input'
				type='text'
				value={props.comment}
				placeholder='Add comment... '
				onChange={handleChanges}
				id='comment-input'
			/>
			<button type='submit'>Send Comment</button>
		</form>
	);
};

export default CommentInput;

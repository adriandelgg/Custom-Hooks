import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons';

const HeartIcon = () => {
	const [heartFilled, setHeartFilled] = useState(false);

	const toggleHeart = () => {
		setHeartFilled(prev => !prev);
	};

	return (
		<IconButton onClick={toggleHeart}>
			{heartFilled ? (
				<Favorite color="secondary" />
			) : (
				<FavoriteBorder color="secondary" />
			)}
		</IconButton>
	);
};

export default HeartIcon;

// LikeButton.js
import React, { useState } from 'react';
import axios from 'axios';

const LikeButton = ({ eventId }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    axios.patch(`/api/events/${eventId}/like/`)
      .then(response => {
        setIsLiked(response.data.likes.includes(currentUser.id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <button onClick={handleLike}>
      {isLiked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeButton;

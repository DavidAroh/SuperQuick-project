import React, { useState } from 'react';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import '../styles/LikeButton.css'; 

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="like-button">
      <button onClick={handleLikeClick}>
        {liked ? <IoHeartSharp color="#009444" size={24} /> : <IoHeartOutline color="gray" size={24} />}
      </button>
    </div>
  );
};

export default LikeButton;

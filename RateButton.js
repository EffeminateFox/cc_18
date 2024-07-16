//U54529624
// RateButton.js
import React, { useState } from 'react';

const RateMovieButton = ({ movie }) => {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');

    const handleRating = (rate) => {
        setRating(rate);
        setMessage(`You have rated ${movie} ${rate} stars!`);
    };

    return (
        <div>
            <div>
                {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} onClick={() => handleRating(star)}>
                        {star} Star{star > 1 && 's'}
                    </button>
                ))}
            </div>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RateMovieButton;

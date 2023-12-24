import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (starIndex) => {
        // If the star is clicked, set the rating to the clicked star index + 1
        setRating(starIndex);
        console.log(rating+1);
    };

    return (
        <div className='text-center'>
            {[1, 2, 3, 4, 5].map((starIndex) => (
                <span
                    key={starIndex}
                    onClick={() => handleStarClick(starIndex)}
                    style={{
                        cursor: 'pointer',
                        color: starIndex <= rating ? 'gold' : 'gray',
                    }}
                >
                    ★
                </span>
            ))}
            <p>Selected Rating: {rating}</p>
        </div>
    );
};

export default StarRating;

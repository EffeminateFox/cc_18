//U54529624
// Toolbar.js
import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';

const Toolbar = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(movies[0]);

    const handleMovieChange = (event) => {
        setSelectedMovie(event.target.value);
    };

    return (
        <div>
            <select onChange={handleMovieChange} value={selectedMovie}>
                {movies.map((movie) => (
                    <option key={movie} value={movie}>
                        {movie}
                    </option>
                ))}
            </select>
            <RateMovieButton movie={selectedMovie} />
        </div>
    );
};

export default Toolbar;

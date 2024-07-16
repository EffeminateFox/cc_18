//U54529624
// App.js
import React from 'react';
import Toolbar from './Toolbar';
import UploadButton from './UploadButton';

const movies = ['Inception', 'The Dark Knight', 'Interstellar', 'Memento'];

const App = () => {
    return (
        <div>
            <h1>Interactive Media Platform</h1>
            <Toolbar movies={movies} />
            <UploadButton />
        </div>
    );
};

export default App;

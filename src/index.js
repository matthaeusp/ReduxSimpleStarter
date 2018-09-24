import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAw1ojgMqQZIKB2wwoJYi5A_Y0ND7bhzaM';

// Create a new component
//This component should produce HTML

const App = () => {
    return (
    <div>
        <SearchBar/>
    </div>
    );
}

// Take this component's and put on the page (in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));

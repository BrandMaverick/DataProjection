import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import ReactTable from 'react-table';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Counter),
        document.getElementById('mount')
        );
});
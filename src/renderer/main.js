import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from "../navigation";
import './main.scss';

const App = () => (
    <Navigation />
);

ReactDOM.render(<App />, document.getElementById('app'));

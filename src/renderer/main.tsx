import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './main.scss';
import { Navigation } from '../navigation';

const App = () => <Navigation />;

ReactDOM.render(<App />, document.getElementById('app'));

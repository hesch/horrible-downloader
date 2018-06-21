import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './main.scss';
import {configureStore} from "../shared/reducers/configureStore";
import {Root} from "../Root";

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('app'));

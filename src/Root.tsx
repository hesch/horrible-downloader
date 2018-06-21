import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Navigation, NavItem} from "./navigation";
import {Overview} from "./overview";
import {Feed} from "./feed";
import {Store} from "./shared/reducers/store";
import {Store as ReduxStore} from 'redux';

export const navItems: NavItem[] = [
  {title: 'Main', component: Feed},
  {title: 'Shows', component: Overview},
  {title: 'Subscriptions', component: Overview},
];

export const Root = ({store}: { store: ReduxStore<Store.All> }) => (
  <Provider store={store}>
    <Router>
      <div className="columns">
        <Navigation/>
        <div className="column container">
          {navItems.map(item => (
            <Route
              key={item.title}
              path={`/${item.title}`}
              component={item.component}
            />
          ))}
        </div>
      </div>
    </Router>
  </Provider>
);

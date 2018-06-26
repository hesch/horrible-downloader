import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navigation, NavItem } from './navigation';
import { Overview } from './overview';
import { Feed } from './feed';
import { Store } from './shared/reducers/store';
import { Store as ReduxStore } from 'redux';
import { Subscription } from './component/subscription-view/subscription-view';
import { SeriesView } from './component/series-view/series-view';

export const navItems: NavItem[] = [
  { title: 'Main', route: 'main', component: Feed },
  { title: 'Shows', route: 'shows', component: Overview },
  { title: 'Subscription', route: 'subscriptions', component: Subscription },
  { route: 'series/:id', component: SeriesView },
];

export const Root = ({ store }: { store: ReduxStore<Store.All> }) => (
  <Provider store={store}>
    <Router>
      <div className="columns">
        <Navigation />
        <div className="column container">
          {navItems.map(item => (
            <Route
              key={item.route}
              path={`/${item.route}`}
              component={item.component}
            />
          ))}
        </div>
      </div>
    </Router>
  </Provider>
);

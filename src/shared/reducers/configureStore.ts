import root from './root';
import { createStore, applyMiddleware, Store as ReduxStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { Store } from './store';
import { loadSeries } from './Action';

export const configureStore = (): ReduxStore<Store.All> => {
  // const middlewares = [];

  const store: any = createStore(
    root,
    applyMiddleware(reduxThunk),
  );

  store.dispatch(loadSeries());

  return store;
};

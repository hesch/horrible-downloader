import rootReducer from './root';
import {createStore, Store as ReduxStore} from 'redux';
import {Store} from "./store";

export const configureStore = (): ReduxStore<Store.All> => {

    // const middlewares = [];

    return createStore(rootReducer);
};

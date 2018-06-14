import rootReducer from 'src/shared/reducers/root';
import {createStore} from 'redux';

export const configureStore = () => {

    const middlewares = [];

    return createStore(rootReducer);
};

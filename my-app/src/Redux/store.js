import { createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducer/index';
import Saga from './Saga/mysaga'


const sagaMiddleware = createSagaMiddleware();
export  const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Saga);

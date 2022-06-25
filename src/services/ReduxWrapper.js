import React from "react";
import { Provider } from "react-redux";
import rootReducer from './reducers/';
import {createStore} from 'redux'

const store = createStore(rootReducer);

export default ({ element }) => (
  <Provider store={store}>{element}</Provider>
)
import { createStore } from 'redux';
import { reducers } from './reducers'

export const store = createStore(
  reducers,
  (window as any)._REDUX_DEVTOOLS_EXTENSION_ && (window as any)._REDUX_DEVTOOLS_EXTENSION_()
);

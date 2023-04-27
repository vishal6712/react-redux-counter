import { legacy_createStore as createStore } from 'redux';

import mainreducer from "./reducers/mainreducer";
//all states are here in this store centralised store
const store=createStore(mainreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //with redux dev tool

export default store;
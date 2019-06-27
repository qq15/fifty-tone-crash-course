import { createStore } from 'redux';
import audioReducer from './audioReducer';

const audioStore = createStore(audioReducer);

export default audioStore;
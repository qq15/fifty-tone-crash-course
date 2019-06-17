import { createStore } from 'redux';
import videoReducer from './videoInfoReducer';

const videoInfoStore = createStore(videoReducer);

export default videoInfoStore;
import { createStore } from 'redux';
import videoReducer from './videoReducer';

const videoStore = createStore(videoReducer);

export default videoStore;
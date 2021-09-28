import { combineReducers } from 'redux';
import characters from './modules/character/characterReducer';
import episodes from './modules/episode/episodeReducer';
import locations from './modules/location/locationReducer';

const reducers = combineReducers({
    characters,
    episodes,
    locations
});

export default reducers;


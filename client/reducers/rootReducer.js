import {
    combineReducers
} from "redux";

import home from './home';
import rank from './rank';

var rootReducer=combineReducers({
    home,
    rank
});

export default rootReducer;

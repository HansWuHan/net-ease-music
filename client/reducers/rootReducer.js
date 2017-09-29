import {
    combineReducers
} from "redux";
//这里引入添加的reducer文件

import home from './home';

var rootReducer=combineReducers({
    home,
});

export default rootReducer;
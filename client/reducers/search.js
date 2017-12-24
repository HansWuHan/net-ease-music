import { GET_SEARCH } from '../actions/search'

let initialState={
    searchDetail: [],
};

export default function search(state=initialState,action){
    switch(action.type){
        case GET_SEARCH:
            return Object.assign({},state,{searchDetail:action.searchDetail,});
        default :
            return state;
    }
}
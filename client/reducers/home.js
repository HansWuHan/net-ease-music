import { GET_NEW_SONGS,GET_MV,GET_PRIVATE_CONTENT,GET_PERSONAL_DETAIL,GET_DJPROGRAM_DETAIL,GET_PLAYLIST_DETAIL} from '../actions/home'
//定义最初的state
let init={
    newSongsDetail:[],
    mvDetail:[],
    privateConDetail: [],
    personalizedDetail:[],
    djprogramDetail:[],
    playListDetail:[],
};
export default function user(state=init,action){
    switch(action.type){
        case GET_NEW_SONGS:
            return Object.assign({},state,{newSongsDetail:action.newSongsDetail});
        case GET_MV:
            return Object.assign({},state,{mvDetail:action.mvDetail});
        case GET_PRIVATE_CONTENT:
            return Object.assign({},state,{privateConDetail:action.privateConDetail});
        case GET_PERSONAL_DETAIL:
            return Object.assign({},state,{personalizedDetail:action.personalizedDetail});
        case GET_DJPROGRAM_DETAIL:
            return Object.assign({},state,{djprogramDetail:action.djprogramDetail});
        case GET_PLAYLIST_DETAIL:
            return Object.assign({},state,{playListDetail:action.playListDetail});
        default :
            return state;
    }
}
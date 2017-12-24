/*
 * 本文件包含首页的所有action，个人推荐，歌单，排行榜
*/

// 引入axios封装好ajax传输，页面使用时Ajax.getAjax(url,cb),其中getAjax是ajax中封装函数的名字，cd是回调函数
import * as Ajax from './ajax'
//定义
export const GET_NEW_SONGS = 'GET_NEW_SONGS';
export const GET_MV = 'GET_MV';
export const GET_PRIVATE_CONTENT = 'GET_PRIVATE_CONTENT';
export const GET_PERSONAL_DETAIL = 'GET_PERSONAL_DETAIL';
export const GET_PLAYLIST_DETAIL = 'GET_PLAYLIST_DETAIL';
export const GET_DJPROGRAM_DETAIL = 'GET_DJPROGRAM_DETAIL';

//获取最新音乐
const getNewSongs = (response) => ({
    type: GET_NEW_SONGS,//type的名字，和定义的名称以及reducer中的action.type的值保持一致
    newSongsDetail: response
})

//获取最新音乐(在recommend页面的componentDidMount时期调用)
export const newSongs = () => {
    return function(dispatch) {
        Ajax.getAjax(`/api/newsongs`,function(response){
            if (response) {
                // 通过dispatch调用getNewSongs函数，将获取的值传给reducer,更新action对应的函数
                dispatch(getNewSongs(response.data))
            }
        }) 
    }
}

//获取推荐MV
const getMvs = (response) => ({
    type: GET_MV,//type的名字，和定义的名称以及reducer中的action.type的值保持一致
    mvDetail: response
})

export const getMvDetail = () => {
    return function(dispatch) {
        Ajax.getAjax(`/api/mv`,function(response){
            if (response) {
                // 通过dispatch调用getNewSongs函数，将获取的值传给reducer,更新action对应的函数
                dispatch(getMvs(response.data))
            }
        }) 
    }
}

//获取独家放送
const PrivateContentDetail = (response) => ({
    type: GET_PRIVATE_CONTENT,
    privateConDetail: response
})

export const PrivateContent = () => {
    return function(dispatch) {
        Ajax.getAjax(`/api/privatecontent`,function(response){
            if (response) {
                // 通过dispatch调用getNewSongs函数，将获取的值传给reducer,更新action对应的函数
                dispatch(PrivateContentDetail(response.data))
            }
        }) 
    }
}

const PersonalizedDetail = (response) => ({
    type: GET_PERSONAL_DETAIL,
    personalizedDetail: response
})

export const getPersonalized = () => {
    return function(dispatch) {
        Ajax.getAjax(`/api/personalized`,function(response){
            if (response) {
                // 通过dispatch调用getNewSongs函数，将获取的值传给reducer,更新action对应的函数
                dispatch(PersonalizedDetail(response.data))
            }
        }) 
    }
}
//获取主播电台
const DJProgramDetail = (response) => ({
    type: GET_DJPROGRAM_DETAIL,
    djprogramDetail: response
})

export const getDJProgram = () => {
    return function(dispatch) {
        Ajax.getAjax(`/api/djprogram`,function(response){
            if (response) {
                // 通过dispatch调用getNewSongs函数，将获取的值传给reducer,更新action对应的函数
                dispatch(DJProgramDetail(response.data))
            }
        }) 
    }
}


//获取歌单
const PlayListDetail = (response) => ({
    type: GET_PLAYLIST_DETAIL,
    playListDetail: response
})

export const getPlayList = () => {
    return function(dispatch) {
        Ajax.getAjax(`/api/playlist`,function(response){
            if (response) {
                // 通过dispatch调用getNewSongs函数，将获取的值传给reducer,更新action对应的函数
                dispatch(PlayListDetail(response.data))
            }
        }) 
    }
}
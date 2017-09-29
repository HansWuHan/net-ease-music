/*
 * 本文件包含首页的所有action，个人推荐，歌单，排行榜
*/
import * as Ajax from './ajax'

export const GET_PERSONAL_DETAIL = 'GET_PERSONAL_DETAIL';
export const GET_PLAYLIST_DETAIL = 'GET_PLAYLIST_DETAIL';

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

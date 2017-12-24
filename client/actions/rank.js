/*
 * 本文件包含排行榜的所有action
*/

// 引入axios封装好ajax传输，页面使用时Ajax.getAjax(url,cb),其中getAjax是ajax中封装函数的名字，cd是回调函数
import * as Ajax from './ajax'
//定义
export const GET_OFFICIAL_RANK = 'GET_OFFICAIL_RANK';
export const GET_NATIONAL_RANK = 'GET_NATIONAL_RANK';

//获取官方榜
const getOfficialRank = (response) => ({
    type: GET_OFFICIAL_RANK,//type的名字，和定义的名称以及reducer中的action.type的值保持一致
    officialRank: response
})

export const officialRankDetail = () => {
    return function(dispatch) {
        Ajax.getAjax(`/api/officialrank`,function(response){
            if (response) {
                // 通过dispatch调用getNewSongs函数，将获取的值传给reducer,更新action对应的函数
                dispatch(getOfficialRank(response.data))
            }
        }) 
    }
}

//获取全球榜
const getNationalRank = (response) => ({
    type: GET_NATIONAL_RANK,
    nationalRank: response
})

export const nationalRankDetail = () => {
    return function(dispatch) {
        Ajax.getAjax(`/api/nationalrank`,function(response){
            if (response) {
                // 通过dispatch调用getNewSongs函数，将获取的值传给reducer,更新action对应的函数
                dispatch(getNationalRank(response.data))
            }
        }) 
    }
}

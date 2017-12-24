/*
 * 本文件包含查询页面的所有action
*/

import * as Ajax from './ajax'
//定义
export const GET_SEARCH = 'GET_SEARCH';

//获取查询结果
const getSearch = (response) => ({
    type: GET_SEARCH,
    searchDetail: response,
})
export const getSearchDetail = (data) => {
    return function(dispatch) {
        if(data) {
            let arr=JSON.parse(window.localStorage.getItem('searchRecord')) || [];
            Array.prototype.removeByValue = function(val) {
                for(var i=0; i<this.length; i++) {
                    if(this[i] == val) {
                        this.splice(i, 1);
                        break;
                    }
                }
            }
            arr.removeByValue(data);
            arr.unshift(data);
            window.localStorage.setItem('searchRecord',JSON.stringify(arr));
        }
        Ajax.getAjax(`/api/search?search=${data}`,function(response){
            if (response) {
                dispatch(getSearch(response.data));
            }
        })
    }
}


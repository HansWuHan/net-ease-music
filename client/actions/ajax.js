/*
 * 本文件使用axios封装了所有的ajax
*/
//引入axios
import axios from 'axios'

//封装的get方式获取数据，cb回调函数调用时可以取得response的值
export function getAjax(url,cb) {
    axios.get(url)
        .then(function (response) {
            cb(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
//封装的put方式获取数据，data是需要传输的值，cb回调函数调用时可以取得response的值
export function putAjax(url,data,cb) {
    axios.put(url,data)
        .then(function (response) {
            cb(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
//封装的post方式获取数据，data是需要传输的值，cb回调函数调用时可以取得response的值
export function postAjax(url,data,cb) {
    axios.post(url,data)
        .then(function (response) {
            cb(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
//封装的delete方式获取数据，cb回调函数调用时可以取得response的值
export function deleteAjax(url,cb) {
    axios.delete(url)
        .then(function (response) {
            cb(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
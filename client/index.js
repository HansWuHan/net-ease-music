//引入react,react-dom
import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    Provider
}from "react-redux";
// 引入React-Router模块
import { HashRouter, Router, Route, hashHistory } from 'react-router-dom'
import store from "./store/store";

//引入自定义组件
import Home from "./pages/home";//首页页面（个性推荐，歌单，主播电台，排行榜）
import LoginHome from "./pages/loginHome";//登录首页
import Login from "./components/Login/login";//登录页面
import Register from "./components/Login/register";//登录页面
import Music from "./pages/music";//个人音乐
import Friends from "./pages/friends";//朋友圈
import Footer from "./pages/footer";//播放
import PlayDetial from './components/Player/playDetail';//播放详情
import Search from "./pages/search";//搜索页面

// 配置路由 (Provider 是一个react组件，提供一个全局的store使得所有的组件都可以使用)
render((
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/loginhome" component={LoginHome} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/music" component={Music} />
                <Route path="/friends" component={Friends} />
                <Route path="/search" component={Search} />
                <Route path="/playing" component={PlayDetial} />
                <Footer/>
            </div>
        </HashRouter>
    </Provider>
),document.getElementById('content'));

if (module.hot) {
    module.hot.accept();
}
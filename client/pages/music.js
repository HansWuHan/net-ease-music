import React, { Component } from 'react';
import { connect } from "react-redux";
import { List } from 'antd-mobile';
import FontAwesome from 'react-fontawesome';
import Header from "./header";
import '../styles/music.less'

const Item = List.Item;

class Music extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='my-music'>
                <Header />
                <List renderHeader={null} className="my-music-list">
                    <Item extra={null}>
                        <FontAwesome type='music' name='music'></FontAwesome>
                        <span>本地音乐 <span className='songs-num'>(0)</span></span>
                    </Item>
                    <Item extra={null}>
                        <FontAwesome type='music' name='music'></FontAwesome>
                        <span>最近播放 <span className='songs-num'>(0)</span></span>
                    </Item>
                    <Item extra={null}>
                        <FontAwesome type='music' name='music'></FontAwesome>
                        <span>下载管理 <span className='songs-num'>(0)</span></span>
                    </Item>
                    <Item extra={null}>
                        <FontAwesome type='music' name='music'></FontAwesome>
                        <span>我的电台 <span className='songs-num'>(0)</span></span>
                    </Item>
                    <Item extra={null}>
                        <FontAwesome type='music' name='music'></FontAwesome>
                        <span>我的收藏 <span className='songs-num'>(0)</span></span>
                    </Item>
                </List>
                <div className='create-playlist'>
                    <span>
                        <FontAwesome name='angle-right' key='angle-right-1'></FontAwesome> &nbsp;创建的歌单(0)
                    </span>
                    <span className='handle'>
                        <FontAwesome name='cog' key='cog-1'></FontAwesome>
                    </span>
                </div>
                <div className='collect-playlist'>
                    <span>
                        <FontAwesome name='angle-right' key='angle-right-2' ></FontAwesome> &nbsp;收藏的歌单(0)
                    </span>
                    <span className='handle'>
                        <FontAwesome name='cog' key='cog-2'></FontAwesome>
                    </span>
                </div>
            </div> 
        )
    }
}

function select(state){
    return{
        
    }
}

export default connect(select) (Music);


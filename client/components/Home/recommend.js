// 引入react
import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { Flex } from 'antd-mobile';
import Carousels from './carousels'
import './recommend.less'
import {
    newSongs,getMvDetail,PrivateContent,getPersonalized,getDJProgram
} from "../../actions/home";
import {
    connect
} from "react-redux";

class Recommend extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.dispatch(newSongs());
        this.props.dispatch(getMvDetail());
        this.props.dispatch(PrivateContent());
        this.props.dispatch(getPersonalized());
        this.props.dispatch(getDJProgram());
    }


    render() {
        const { newSongsDetail,mvDetail,privateConDetail,personalizedDetail,djprogramDetail} = this.props;
        return(
            <div style={{ width: '100%', }}>
                <Carousels/>
                <div className='recommend-container'>
                    <Flex>
                        <Flex.Item><div><FontAwesome key='address-card-o' name="address-card-o"></FontAwesome></div><span>私人FM</span></Flex.Item>
                        <Flex.Item><div><FontAwesome key='calendar' name="calendar"></FontAwesome></div><span>每日歌曲推荐</span></Flex.Item>
                        <Flex.Item><div><FontAwesome key='signal' name="signal"></FontAwesome></div><span>云音乐热歌榜</span></Flex.Item>
                    </Flex>
                </div>
                <div className='recommend-songs'>
                    <div className='recommend-title'>推荐歌单 &gt;</div>
                     {
                        personalizedDetail.map((item, index) => {
                            return (
                                <div className='recommend-content content' key={index}>
                                    <div className='song-cover'>
                                        <p>
                                            <i className='fa fa-headphones'></i> {item.playCount}
                                        </p>
                                        <img src={item.picUrl}/>
                                    </div>
                                <div className='song-describition'>{item.name}</div>
                            </div>
                            )
                        })
                    }
                </div>
                <div className='recommend-songs exclusive-songs'>
                    <div className='recommend-title'>独家放送 &gt;</div>
                    {
                        privateConDetail.map((item, index) => {
                            return (
                                <div className='content mv-content' key={index}>
                                    <div className='song-cover'>
                                        <img src={item.sPicUrl}/>
                                    </div>
                                    <div className='song-describition'>{item.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='recommend-songs'>
                    <div className='recommend-title'>最新音乐 &gt;</div>
                    {
                        newSongsDetail.map((item, index) => {
                            return (
                                <div className='new-songs' key={index}>
                                    {index < 6?
                                        <div className='recommend-content content'>
                                            <div className='song-cover'>
                                                <img src={item.albumPicUrl}/>
                                            </div>
                                            <div className='song-title'>{ item.name }</div>
                                            <div className='song-subtitle'>{ item.artistName }</div>
                                        </div>
                                    :''}
                                </div>
                            )
                        })
                    }
                </div>
                 <div className='recommend-songs'>
                    <div className='recommend-title'>推荐MV &gt;</div>
                    {
                        mvDetail.map((item, index) => {
                            return (
                                <div className='mv-content content' key={index}>
                                    <div className='song-cover'>
                                        <p><i className='fa fa-video-camera'></i> {item.playCount}</p>
                                        <img src={item.picUrl}/>
                                    </div>
                                    <div className='song-title'>{item.name}</div>
                                    <div className='song-subtitle'>{item.artistName}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='recommend-songs'>
                    <div className='recommend-title'>主播电台 &gt;</div>
                    {
                        djprogramDetail.map((item, index) => {
                            return (
                                <div className='recommend-content content' key={index}>
                                    <div className='song-cover'>
                                        <img src={item.picUrl}/>
                                    </div>
                                    <div className='song-describition'>{item.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function select(state){
    return{
        newSongsDetail:state.home.newSongsDetail,
        mvDetail:state.home.mvDetail,
        privateConDetail:state.home.privateConDetail,
        personalizedDetail:state.home.personalizedDetail,
        djprogramDetail:state.home.djprogramDetail,
    }
}

export default connect(select) (Recommend);
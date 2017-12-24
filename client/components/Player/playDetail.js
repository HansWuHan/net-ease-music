/*
 播放详情页面
*/
import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from "react-redux";
import './playDetail.less'

class PlayDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLyric:false,
        }
    }

    goBack() {
        window.history.go(-1);
    }

    toggleShow () {
        this.setState({
            showLyric: !this.state.showLyric,
        })
    }

    render() {
        const { showLyric } = this.state;
        return(
            <div className="single-player">
                <div className="player-wrapper">
                    <div className='header-other'>
                        <span onClick={()=>this.goBack()} className="back">
                            <FontAwesome name='arrow-left' key='arrow-left'></FontAwesome>
                        </span>
                        <div className="play-title">
                            <p className="play-name" ><span>身骑白马</span></p>
                            <p className="play-singer" >徐佳莹</p>
                        </div>
                    </div>
                    <div className="bar-line"></div>
                    <div className="play-content">
                        <div className="play-effect">
                            <div className="cd-holder"  style={{'opacity': showLyric ? 0 : 1}} onClick={()=>this.toggleShow()}>
                                <div className="stick"></div>
                                <div className="cd-wrapper">
                                    <div className="cd-mask"></div>
                                    <img src="/imgs/play_song_cover.jpg" className="cd-img" />
                                </div>
                            </div>
                            <div className="lyric-holder" onClick={()=>this.toggleShow()} style={{'display': showLyric ? 'block' : 'none'}}>
                                <div className="lrc-inner">
                                    <p>没有找到歌词</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mask">
                        <div className="album-cover"></div>
                        <div className="cover-mask"></div>
                    </div>
                </div>
            </div>
        )
    }
}

function select(state){
    return{
        
    }
}

export default connect(select) (PlayDetail);
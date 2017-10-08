import React, { Component } from 'react'
import './recommend.less'
import Carousels from './carousels'
import {
    connect
} from "react-redux";
import FontAwesome from 'react-fontawesome';
import { Flex } from 'antd-mobile';
import { getPersonalized } from "../../actions/home";

class Recommend extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getPersonalized());
    }

    render() {
        const { personalizedDetail } = this.props;
        return(
            <div style={{ width: '100%', }}>
                <Carousels/>
                <div className='recommend-container'>
                    <Flex>
                        <Flex.Item>
                            <div>
                                <FontAwesome key='address-card-o' name="address-card-o"></FontAwesome>
                            </div>
                            <span>私人FM</span>
                        </Flex.Item>
                        <Flex.Item>
                            <div>
                                <FontAwesome key='calendar' name="calendar"></FontAwesome>
                            </div>
                            <span>每日歌曲推荐</span>
                        </Flex.Item>
                        <Flex.Item>
                            <div>
                                <FontAwesome key='signal' name="signal"></FontAwesome>
                            </div>
                            <span>云音乐热歌榜</span>
                        </Flex.Item>
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
            </div>

        )
    }
}

function select(state){
    return{
        personalizedDetail:state.home.personalizedDetail,
    }
}

export default connect(select) (Recommend);
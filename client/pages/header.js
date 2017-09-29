//引入react
import React,{ Component } from 'react';
//引入antd-mobile组件
import { Drawer, List, NavBar,Flex, } from 'antd-mobile';
//引入react-fontawesome
import FontAwesome from 'react-fontawesome';
//自建的样式less文件
import '../styles/header.less';
//引入react-router
import { Link } from 'react-router-dom'
//引入react-redux的connect
import {
    connect
} from "react-redux";

//创建组件
class Header extends Component {
    constructor(props) {
        super(props);
        //open控制侧边栏的显示与隐藏
        this.state = {
            open: false,
        }

    }
    //antd-mobile 组件的自带事件，用于控制侧边栏的显示和隐藏
    onOpenChange(...args) {
        this.setState({ open: !this.state.open });
    }

    render() {
        //侧边栏的内容
        const sidebar = (
            <List>
                <div className='sildebar-user-info'>
                    <div>登录网易云音乐</div>
                    <div>320K高音质无限下载，手机电脑多端同步</div>
                    <Link to='/loginhome'>立即登录</Link>
                </div>
                <List.Item key='1'><a href=''><FontAwesome key='envelope-o' name="envelope-o" /> <span>我的消息</span></a></List.Item>
                <List.Item key='2'><a href=''><FontAwesome key='diamond' name="diamond" /> <span>会员中心</span></a></List.Item>
                <List.Item key='3'><a href=''><FontAwesome key='shopping-cart' name="shopping-cart" /> <span>商城</span></a></List.Item>
                <List.Item key='4'><a href=''><FontAwesome key='archive' name="archive" /> <span>在线听歌免流量</span></a></List.Item>
                <div className=''></div>
                <List.Item key='5'><a href=''><FontAwesome key='user-o' name="user-o" /> <span>我的好友</span></a></List.Item>
                <List.Item key='6'><a href=''><FontAwesome key='envelope-o' name="envelope-o" /> <span>附近的人</span></a><span className="网易云音乐《未来金话筒》播音主持大赛"></span></List.Item>
                <div className=''></div>
                <List.Item key='7'><a href=''><FontAwesome key='street-view' name="street-view" /> <span>更新换肤</span></a><span className="官方红"></span></List.Item>
                <List.Item key='8'><a href=''><FontAwesome key='music' name="music" /> <span>听歌识曲</span></a></List.Item>
                <List.Item key='9'><a href=''><FontAwesome key='bell-o' name="bell-o" /> <span>定时停止播放</span></a></List.Item>
                <List.Item key='10'><a href=''><FontAwesome key='clock-o' name="clock-o" /> <span>音乐闹钟</span></a></List.Item>
                <List.Item key='11'><a href=''><FontAwesome key='car' name="car" /> <span>驾驶模式</span></a></List.Item>
                <List.Item key='12'><a href=''><FontAwesome key='cloud' name="cloud" /> <span>音乐云盘</span></a></List.Item>
            </List>
        );

        return (
            <div className='header'>
                <NavBar
                    iconName={null}
                    leftContent={<FontAwesome key='bars' name="bars" onClick={this.onOpenChange.bind(this)} style={{ display:"block" }}/>}
                    rightContent={<Link to='/search'><FontAwesome key='search' name="search" /></Link>}
                    onLeftClick={this.onOpenChange.bind(this)}
                >
                    <Flex>

                        <Flex.Item><Link to='/music'><FontAwesome key='music' name="music" /></Link></Flex.Item>

                        <Flex.Item><Link to='/'><img className='small-logo' src='/svgs/personal-active.svg'/></Link></Flex.Item>

                        <Flex.Item><Link to='/friends'><FontAwesome key='user' name="user"/></Link></Flex.Item>
                    </Flex>
                </NavBar>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight - 200 }}
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChanged}
                > </Drawer>
            </div>
        );
    }
}

function select(state){
    return{

    }
}
//导出组件
export default connect(select) (Header);
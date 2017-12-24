// 引入react
import React, { Component } from 'react'
import '../styles/loginHome.less'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

class LoginHome extends Component {
    constructor(props) {
        super(props);
     
    }

    render() {
        return(
            <div className='login-home'>
                <img src='/imgs/logo.png'/>
                <Link to='/login' className='login-btn' >手机号登录</Link>
                <Link to='/register' className='register-btn' >注册</Link>
                <p><Link to='/'>游客试用</Link></p>
                <p className='other-login-title'>
                    <span>------ 其他登录方式 ------</span>
                </p>
            </div>
        )
    }
}

function select(state){
    return{
        
    }
}

export default connect(select) (LoginHome);
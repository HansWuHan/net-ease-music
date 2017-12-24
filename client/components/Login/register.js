// 引入react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { createForm } from 'rc-form';
import { Button,Flex,InputItem,List } from 'antd-mobile';
import FontAwesome from 'react-fontawesome';
import './login.less';

class RegisterFrom extends React.Component {
    constructor(props) {
        super(props);

    }

    handleRegister() {
        this.props.form.validateFields((err, values) => {
            console.log(values)
        });
    }

    render() {
        const { getFieldProps } = this.props.form;
        return(
            <div className='login'>
                <div className='login-title'><Link to='/loginhome'><FontAwesome name='arrow-left' key='arrow-left'></FontAwesome></Link> 手机号注册</div>
                <div className='login-content'>
                    <List>
                        {/* InputItem 必须用 List 组件包裹才能正常使用 */}
                        <InputItem
                            {...getFieldProps('cellphone')}
                            type="number"
                            placeholder="请输入手机号"
                        ><FontAwesome name='mobile' key='mobile'></FontAwesome><span className='prompt-num'>+86</span></InputItem>
                        <InputItem
                            {...getFieldProps('password')}
                            type="password"
                            placeholder="设置登录密码，不少于6位"
                        ><FontAwesome name='lock' key='lock'></FontAwesome></InputItem>
                        <Button className="btn login-btn" type="primary" onClick={() => this.handleRegister()}>注册</Button>
                    </List>
                </div>
            </div>
        )
    }
}
const Registe = createForm()(RegisterFrom);

function select(state){
    return{

    }
}

export default connect(select) (Registe);
import React,{ Component } from 'react';
import { connect } from "react-redux";
import Header from "./header";
import '../styles/friends.less'
class Friends extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='friends'>
                <Header/>
                <div className='friends-content'>这是朋友圈页面</div>
            </div>
        );
    }
}

function select(state){
    return{
        
    }
}

export default connect(select) (Friends);

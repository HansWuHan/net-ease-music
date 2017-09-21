//引入react,react-dom
import React, { Component } from 'react';
import { render } from 'react-dom';
//这里的content需要与index.html中div的id一致
render((
    <div>hello,world!</div>
),document.getElementById('content'));


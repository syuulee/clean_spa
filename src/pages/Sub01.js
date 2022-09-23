import React from 'react';
import Aside from './Aside';
import Article from './Article';
import '../css/Subpage.scss'

const Sub01 = ({ content }) => {
    const num = 0;
    //props.contet의 배열만 쓸 거여서 content로 가지고 왔음
    // const pageName = '깔끔이청소 소개';
    return (
        <div className='Subpage'>
            <div className="nav_bar">
                <div className="inner">{content[num].tit / content[0].tit} / 깔끔이청소</div>
            </div>
            <div className="inner sub">
                <Article content={content} num={num} />
                <Aside />
            </div>
        </div>
    )
}

export default Sub01;
import React from 'react';
import Aside from './Aside';
import Article from './Article';
import '../css/Subpage.scss'

const Sub04 = ({ content }) => {
    const num = 3;
    return (
        <div className='Subpage'>
            <div className="nav_bar">
                <div className="inner">{content[num].tit / content[0].tit}</div>
            </div>
            <div className="inner sub">
                <Article content={content} num={num} />
                <Aside />
            </div>
        </div>
    )
}

export default Sub04
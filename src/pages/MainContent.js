import React from 'react'
import { Link } from 'react-router-dom'

const MainContent = ({ word }) => {
    //const {word} = props;
    return (
        <div>
            <section className='MainContent'>
                <div className="inner">
                    {
                        word.map((con, idx) => {
                            return (
                                <Link to={con.link}>
                                    <figure key={con.idx}>
                                        <img src={process.env.PUBLIC_URL + `/assets/images/main_s01${idx + 1}.jpg`} alt="" />
                                    </figure>
                                    <strong>{con.tit}</strong>
                                    <p>{con.des}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default MainContent;

//무보에서 자식으로밖에 전달이 안됨.
//props를 전달하는 게 props-leading
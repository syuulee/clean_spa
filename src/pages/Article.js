import React from 'react'


const Article = ({ content, num }) => {
    return (
        <article className='Article'>
            <div className="tit">
                <strong>{content[num].tit}</strong>&nbsp; &nbsp; / {content[0].tit}
            </div>
            <div className='bg'>
                <div className="case">
                    {
                        num === 0
                            ? <div className="tit_logo">
                                <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="" />
                            </div>
                            : <h2>
                                {content[num].tit}
                            </h2>
                    }
                    <p>
                        {content[num].content}
                    </p>
                </div>
                {/* <div className="img">
                    <img src={process.env.PUBLIC_URL + '/assets/images/slogan.png'} alt="" />
                </div> */}
            </div>

            <div className="sub_title">
                {content[num].tit}
            </div>
            <p className="sub_des">
                {content[num].des}
            </p>

            <div className="sub_img">
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_s011.jpg'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_s012.jpg'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_s013.jpg'} alt="" />
                </figure>
            </div>

            <div className="sub_title">
                {content[num].tit}
            </div>

            <ul className="sub_service">
                <li>쓰레기수거후 진공청소</li>
                <li>베란다 샷시 및 유리창 청소</li>
                <li>베란다 바닥청소</li>
                <li>찌든데, 먼지, 오염제거</li>
                <li>실리콘 곰팡이, 거미줄, 스티커 제거(추가적인 사항 비용발생</li>
            </ul>

        </article>
    )
}

export default Article;
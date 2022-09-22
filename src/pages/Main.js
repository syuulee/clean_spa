import React from 'react';
import MainVisual from './MainVisual';
import MainContent from './MainContent';
import Customer from './Customer';
import '../css/Main.scss';

const Main = ({ content }) => {
    //데이터를 props로 만들어서 maincont(자식 컴포넌트)에 보내는 방법
    // const MAINSLIDE = [
    //     {
    //         id: 1, tit: "아파트입주청소", content: "신축 아파트나 빌라 등 입주 전 상태에서의 실내 청소", des: "보양지 제거, 공사먼지 제거, 오염 제거, 시멘트가루 제거 등\n 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다.", link: "/sub01"
    //     },
    //     {
    //         id: 2, tit: "이사/상가청소", content: "오랫동안 누적된 공간의 묵은 때, 누적된 먼지와 세균들을 이사하기전에 청소", des: "신축 건물은 공사기간 중 쌓인 미세먼지/유해성분들이 곳곳에 산재해 있습니다.\n 입추청소를 맡기시면 유해성분 제거하고 청결한 환경을 만드실 수 있습니다.", link: "/sub02"
    //     },
    //     {
    //         id: 3, tit: "사무실청소", content: "쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소", des: " 쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소 작업 입니다.\n 사무실청소에 있어서 가장 중요한 점은 빠른 시간 내에 완벽한 작업을 마무리 하는 것이 중요합니다.", link: "/sub03"
    //     },
    // ];

    return (
        <main className='Main'>
            <MainVisual word={content} />
            <MainContent word={content} />
            <Customer />
        </main>
    )
}

export default Main
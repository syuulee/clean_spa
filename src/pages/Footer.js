import React from 'react'

const Footer = ({ content }) => {
    return (
        <div className='Footer'>
            <address>
                {content.address}
            </address>
            <ul className="ft_con">
                <li>사업자등록번호 : {content.number}</li>
                <li>전화번호 : {content.tel}</li>
                <li>e-mail : {content.email}</li>
            </ul>
            <span>
                © {content.name} All Rights Reserved.
            </span>
        </div>
    )
}

export default Footer
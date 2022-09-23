import React from 'react';
import NavMenu from './NavMenu';

const Aside = () => {
    return (
        <aside>
            <div className="aside_lnb">
                <NavMenu />
            </div>

            <div className="aside_customer">
                <img src={process.env.PUBLIC_URL + '/assets/images/slogan.png'} alt="" />
                <p>
                    <strong>전화문의 123-456-7890</strong>
                    <hr />
                    <span>email : spacemolla@never.com</span>
                </p>
            </div>
        </aside >
    )
}

export default Aside;
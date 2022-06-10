import React from 'react';
import bannerStyle from './Banner.module.css';

const Banner = () => {
    return (
        <section className={bannerStyle.banner}>
            <div className='container'>
                <div className='row'>
                    <div className={`col-12`}>
                        <div className={bannerStyle.banner_info}>
                            <h2>Computer Engineering</h2>
                            <p>142,765 Computer Engineers follow this</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
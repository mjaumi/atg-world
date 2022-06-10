import React from 'react';
import { AiOutlineSearch, AiFillCaretDown } from 'react-icons/ai';
import logo from '../../images/logo.svg';
import headerStyle from './Header.module.css';

const Header = () => {
    return (
        <header className='container-fluid sticky-top bg-white'>
            <nav className='row p-3 mx-auto'>
                <div className='col-md-12 d-flex justify-content-between align-items-center'>
                    <div>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className={`${headerStyle.search_input_container} d-flex align-items-center`}>
                        <AiOutlineSearch className={headerStyle.search_icon} />
                        <input type='text' placeholder='Search for your favorite groups in ATG' />
                    </div>
                    <div className={headerStyle.create_account_wrapper}>
                        <p>Create account. <span className='text-primary'>It's Free!</span></p>
                        <AiFillCaretDown className={headerStyle.caret_down_icon} />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
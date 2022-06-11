import React, { useEffect, useState } from 'react';
import { MdGroupAdd } from 'react-icons/md';
import { AiFillCaretDown, AiOutlineExclamationCircle } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import { BsEye } from 'react-icons/bs';
import postsContainerStyle from './PostsContainer.module.css';
import signInArt from '../../images/signIn.svg';
import fbIcon from '../../images/fb.svg';
import googleIcon from '../../images/google.svg';
import Post from '../Post/Post';

const PostsContainer = () => {
    // integration of react hooks here
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('posts.json')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    // rendering post container component here
    return (
        <section className={postsContainerStyle.posts_container_section}>
            <div className='container'>
                <div className={`row ${postsContainerStyle.posts_nav_sticky}`}>
                    <div className={postsContainerStyle.posts_nav_container}>
                        <nav className={postsContainerStyle.posts_nav_bar}>
                            <p>All Posts(32)</p>
                            <p>Article</p>
                            <p>Event</p>
                            <p>Education</p>
                            <p>Job</p>
                        </nav>
                        <div className={postsContainerStyle.posts_nav_btn_container}>
                            <button type='button' className='btn btn-light'>
                                Write a Post
                                <AiFillCaretDown className={postsContainerStyle.posts_nav_icon_left} />
                            </button>
                            <button type='button' className='btn btn-primary'>
                                <MdGroupAdd className={postsContainerStyle.posts_nav_icon_right} />
                                Join Group
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`row ${postsContainerStyle.posts_container}`}>
                    <div className='col-7 p-0 mb-5 pb-5'>
                        {
                            posts.map((post, index) => <Post
                                key={post.id}
                                index={index}
                                post={post}
                            />)
                        }
                    </div>
                    <aside className='col-5 d-flex flex-column align-items-end pe-0'>
                        <div className={postsContainerStyle.aside_location_input}>
                            <IoLocationOutline />
                            <input type='text' defaultValue='Noida, India' placeholder='Enter your location' />
                            <MdEdit className={postsContainerStyle.aside_location_edit} />
                        </div>
                        <div className={postsContainerStyle.aside_info}>
                            <AiOutlineExclamationCircle className={postsContainerStyle.aside_info_icon} />
                            <span>
                                Your location will help us serve better and extend a personalised experience.
                            </span>
                        </div>
                    </aside>
                </div>

                <div className='modal fade' id='signupModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                    <div className={`modal-dialog modal-dialog-centered modal-lg ${postsContainerStyle.modal_dialog}`}>
                        <div className={`modal-content ${postsContainerStyle.modal_content}`}>
                            <div className={postsContainerStyle.modal_header}>
                                <p className='text-success'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                            </div>
                            <div className={`modal-body ${postsContainerStyle.modal_body}`}>
                                <div className={postsContainerStyle.modal_body_header}>
                                    <h5 className='modal-title' id='exampleModalLabel'>Create Account</h5>
                                    <div className='d-flex align-items-center'>
                                        <p>Already have an account?</p>
                                        <button className='btn btn-link' data-bs-toggle='modal' data-bs-target='#signInModal'>Sign In</button>
                                    </div>
                                </div>
                                <div className={postsContainerStyle.modal_body_container}>
                                    <div>
                                        <form>
                                            <div className={postsContainerStyle.modal_form}>
                                                <div className='d-flex'>
                                                    <input type='text' className={`border-0 border-bottom border-end ${postsContainerStyle.modal_form_control}`} placeholder='First Name' />
                                                    <input type='text' className={`border-0 border-bottom ${postsContainerStyle.modal_form_control}`} placeholder='Last Name' />
                                                </div>
                                                <input type='email' className={`border-0 border-bottom ${postsContainerStyle.modal_form_control}`} placeholder='Email' />
                                                <div className={postsContainerStyle.pass_field_container}>
                                                    <input type='password' className={`border-0 border-bottom ${postsContainerStyle.modal_form_control}`} placeholder='Password' />
                                                    <BsEye className={postsContainerStyle.password_eye} />
                                                </div>
                                                <input type='password' className={`border-0 ${postsContainerStyle.modal_form_control}`} placeholder='Confirm Password' />
                                            </div>
                                            <div className={postsContainerStyle.modal_form_submit}>
                                                <button type='submit' className='btn btn-primary rounded-pill'>Create Account</button>
                                            </div>
                                        </form>
                                        <div className={postsContainerStyle.social_sign_container}>
                                            <button type='submit' className='btn'>
                                                <img className='me-2' src={fbIcon} alt='Facebook Icon' />
                                                Sign up with Facebook
                                            </button>
                                            <button type='submit' className='btn'>
                                                <img className='me-2' src={googleIcon} alt='Facebook Icon' />
                                                Sign up with Google
                                            </button>
                                        </div>
                                    </div>
                                    <div className={postsContainerStyle.modal_art}>
                                        <img src={signInArt} alt='An Illustration' />
                                        <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                    </div>
                                </div>
                            </div>
                            <button type='button' className={`btn-close ${postsContainerStyle.modal_close_btn}`} data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                    </div>
                </div>

                <div className='modal fade' id='signInModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                    <div className={`modal-dialog modal-dialog-centered modal-lg ${postsContainerStyle.modal_dialog}`}>
                        <div className={`modal-content ${postsContainerStyle.modal_content}`}>
                            <div className={postsContainerStyle.modal_header}>
                                <p className='text-success'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                            </div>
                            <div className={`modal-body ${postsContainerStyle.modal_body}`}>
                                <div className={postsContainerStyle.modal_body_header}>
                                    <h5 className='modal-title' id='exampleModalLabel'>Sign In</h5>
                                    <div className='d-flex align-items-center'>
                                        <p>Don’t have an account yet?</p>
                                        <button className='btn btn-link' data-bs-toggle='modal' data-bs-target='#signupModal'>Create new for free!</button>
                                    </div>
                                </div>
                                <div className={postsContainerStyle.modal_body_container}>
                                    <div>
                                        <form>
                                            <div className={postsContainerStyle.modal_form}>
                                                <input type='email' className={`border-0 border-bottom ${postsContainerStyle.modal_form_control}`} placeholder='Email' />
                                                <div className={postsContainerStyle.pass_field_container}>
                                                    <input type='password' className={`border-0 border-bottom ${postsContainerStyle.modal_form_control}`} placeholder='Password' />
                                                    <BsEye className={postsContainerStyle.password_eye} />
                                                </div>
                                            </div>
                                            <div className={postsContainerStyle.modal_form_submit}>
                                                <button type='submit' className='btn btn-primary rounded-pill'>Sign In</button>
                                            </div>
                                        </form>
                                        <div className={postsContainerStyle.social_sign_container}>
                                            <button type='submit' className='btn'>
                                                <img className='me-2' src={fbIcon} alt='Facebook Icon' />
                                                Sign up with Facebook
                                            </button>
                                            <button type='submit' className='btn'>
                                                <img className='me-2' src={googleIcon} alt='Facebook Icon' />
                                                Sign up with Google
                                            </button>
                                        </div>
                                        <div>
                                            <button className={`btn btn-link ${postsContainerStyle.forgot_pass_btn}`}>Forgot Password?</button>
                                        </div>
                                    </div>
                                    <div className={postsContainerStyle.modal_art}>
                                        <img src={signInArt} alt='An Illustration' />
                                    </div>
                                </div>
                            </div>
                            <button type='button' className={`btn-close ${postsContainerStyle.modal_close_btn}`} data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostsContainer;
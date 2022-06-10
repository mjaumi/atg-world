import React, { useEffect, useState } from 'react';
import { MdGroupAdd } from 'react-icons/md';
import { AiFillCaretDown, AiOutlineExclamationCircle } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import postsContainerStyle from './PostsContainer.module.css';
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
            </div>
        </section>
    );
};

export default PostsContainer;
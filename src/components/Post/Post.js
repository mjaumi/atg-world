import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { AiOutlineEye } from 'react-icons/ai';
import { BsFillShareFill, BsBriefcase } from 'react-icons/bs';
import { RiCalendarEventFill } from 'react-icons/ri';
import { IoLocationOutline } from 'react-icons/io5';
import postCardStyle from './Post.module.css';

const Post = ({ post, index }) => {
    // destructuring the props
    const { genre, postImgUrl, title, body, location, others, views, postedBy, userImgUrl } = post;

    // rendering post cards here
    return (
        <div className={`card ${postCardStyle.post_card}`}>
            {
                postImgUrl && <img src={postImgUrl} className='card-img-top' alt='...' />
            }
            <div className='card-body text-start'>
                <p className={postCardStyle.post_card_genre}>{genre}</p>
                <div className='d-flex align-items-center justify-content-between'>
                    <h5 className={postCardStyle.post_card_title}>{title}</h5>
                    <div className='dropdown'>
                        <button className={`btn ${postCardStyle.post_card_title_btn}`} type='button' id={`dropdownMenuButton${index}`} data-bs-toggle='dropdown' aria-expanded='false'>
                            <HiDotsHorizontal className={postCardStyle.post_card_title_icon} />
                        </button>
                        <ul className='dropdown-menu dropdown-menu-end' aria-labelledby={`dropdownMenuButton${index}`}>
                            <li><button className='dropdown-item'>Edit</button></li>
                            <li><button className='dropdown-item'>Report</button></li>
                            <li><button className='dropdown-item'>Option 3</button></li>
                        </ul>
                    </div>
                </div>
                <p className={postCardStyle.post_card_body}>{body}</p>
                <div className='d-flex'>
                    {
                        others &&
                        <p className={postCardStyle.post_card_others}>{index === 3 ? <BsBriefcase /> : <RiCalendarEventFill />} {others}</p>
                    }
                    {
                        location &&
                        <p className={postCardStyle.post_card_location}><IoLocationOutline /> {location}</p>
                    }
                </div>
                {
                    index === 2 &&
                    <div>
                        <button className={`btn btn-outline-secondary ${postCardStyle.post_card_btn}`}>Visit Website</button>
                    </div>
                }
                {
                    index === 3 &&
                    <div>
                        <button className={`btn btn-outline-secondary ${postCardStyle.post_card_btn_alt}`}>Apply on Timesjobs</button>
                    </div>
                }
            </div>
            <div className={`card-footer ${postCardStyle.post_card_footer}`}>
                <div className={postCardStyle.post_card_footer_user}>
                    <img src={userImgUrl} alt='user' />
                    <p>{postedBy}</p>
                </div>
                <div className='d-flex align-items-center'>
                    <small className={postCardStyle.post_card_footer_info}>
                        <AiOutlineEye className={postCardStyle.post_card_footer_info_icon} />
                        {views} Views
                    </small>
                    <button className={`btn ${postCardStyle.post_card_footer_btn}`}>
                        <BsFillShareFill className={postCardStyle.post_card_title_icon} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Post;
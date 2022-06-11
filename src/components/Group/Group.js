import React, { useState } from 'react';
import groupStyle from './Group.module.css';

const Group = ({ group }) => {
    // destructuring the props here
    const { groupImg, groupName } = group;

    // integration of react hooks here
    const [followed, setFollowed] = useState(false);

    // rendering group component here
    return (
        <div className={groupStyle.group_container}>
            <div className='d-flex align-items-center'>
                <img src={groupImg} alt={groupName} />
                <p>{groupName}</p>
            </div>
            <div>
                <button onClick={() => setFollowed(!followed)} className={`btn rounded-pill ${followed ? groupStyle.followed_btn : groupStyle.follow_btn}`}>{followed ? 'Followed' : 'Follow'}</button>
            </div>
        </div>
    );
};

export default Group;
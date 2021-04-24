import React from 'react';
import {PostsContainer} from './Posts/PostsContainer';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
    return (
        <div className={s.main}>
            <ProfileInfo profile={props.profile} status={props.status} setProfileStatus={props.setProfileStatus}/>
          <PostsContainer />
        </div>
    );
}


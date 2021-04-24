import React from 'react';
import s from "../Profile.module.css";
import Loader from "../../common/Loader/Loader";
import {ProfileStatus} from "./ProfileStatus";

export const ProfileInfo = props => {
    if(!props.profile) return <Loader/>
    return (
        <div className={s.profile}>
            <div className={s.banner} style={{backgroundImage : `url(${props.profile.photos.large})`}}>

                <div className={s.profileAvatar}>
                    <img src={props.profile.photos.small} alt=""/>
                </div>
                <div className={s.profileName}>
                    {props.profile.fullName}
                </div>

                <div className={s.profileAbout}>
                    {props.profile.aboutMe}
                </div>


            </div>

            <ProfileStatus profileId={props.profile} status={props.status} setProfileStatus={props.setProfileStatus}/>



            <div>

            </div>
        </div>
    );
};

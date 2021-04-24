import React from 'react';
import s from './Users.module.css'
import {User} from "./User/User";
import Pagination from "../common/Pagination/Pagination";
import Loader from "../common/Loader/Loader";

export const Users = props => {


    return (
        <>
            {props.isFetching && <Loader/>}
            <div className={s.users}>
                {
                    props.users.map(user => (
                        <User
                            key={user.id}
                            id={user.id}
                            avatar={user.photos.small}
                            name={user.name}
                            status={user.status}
                            location={user.location}
                            followed={user.followed}
                            isFetching={props.isFetching}
                            isFollowing={props.isFollowing}
                            onFollowed={props.onFollowed}
                        />
                    ))
                }


                <Pagination
                    //params
                    sizePagination={5}
                    //variables
                    totalUserCount={props.totalUserCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    //action
                    onPageChanged={props.onPageChanged}
                />

            </div>
        </>
    );
};


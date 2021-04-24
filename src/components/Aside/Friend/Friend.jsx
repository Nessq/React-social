import React from 'react';

const Friend = (props) => {
    return (
        <div>
            <img src={props.avatar} alt=""/>
            <p id={props.id}>{props.name}</p>
        </div>
    );
};

export default Friend;
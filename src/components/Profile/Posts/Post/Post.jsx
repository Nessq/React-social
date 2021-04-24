import React from 'react'
import s from './../../Profile.module.css'
import iconLike from './like.svg'


export const Post = (props) => {


  return (
    <div className={s.content}>
      <img src={props.img} alt="" className={s.avatar}/>
      <p className={s.text}>{props.text}</p>
      <div className={s.date}>{props.date}</div>
      <div className={s.like}><span>{props.likeCount}</span> <img src={iconLike} alt="" width='13'/></div>
    </div>
  )
}

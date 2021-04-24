import React, {Fragment} from 'react'
import {Post} from './Post/Post'
import {useForm} from "react-hook-form";


const s = require('../Profile.module.css')

export const Posts = (props) => {

    const {register, handleSubmit, reset, formState: { errors }, getValues} = useForm({
        mode : 'onChange',
    })


    const handleAddPostEnter = (e) =>{
        if(e.keyCode === 13 && e.shiftKey === false){
            e.preventDefault()

            handleSubmit(onSubmit)()
        }
    }

    const onSubmit = (data) =>{
        props.handleAddPost(data.textPost)
        reset()
    }


    let validMaxLength = errors.textPost?.type === 'maxLength'

    return (
        <Fragment>
            <form className={s.addPost} onSubmit={handleSubmit(onSubmit)}>
                <textarea className={(validMaxLength ? s.noValid : '')} onKeyDown={handleAddPostEnter} {...register('textPost', {
                    required : true,
                    maxLength : {
                        value : 100,
                        message : `Максимальная длина 100 символов`
                    }
                })}/>

                <button>Добавить</button>
            </form>
            <p className={`${s.noValidMessage} ${validMaxLength ? s.noValidMessageShow : ''}`}>{errors.textPost?.message}</p>

            <h2>Мои Записи</h2>

            <div className="posts">

                {
                    props.posts.map(post =>
                        <Post
                            key={post.id}
                            text={post.text}
                            img={post.img}
                            date={post.date}
                            likeCount={post.likeCount}
                        />
                    )
                }


            </div>

        </Fragment>
    )
}

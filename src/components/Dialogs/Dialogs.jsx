import React from 'react'
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {useForm} from "react-hook-form";

export const Dialogs = (props) => {

    const {register, handleSubmit, reset} = useForm({defaultValues: undefined});


    const mapDialogsItems = props.d.map(item => <Dialog key={item.id} id={item.id} name={item.name}/>)
    const mapMessages = props.dd.map(item => <Message key={item.id} id={item.id} message={item.message}/>)

    const onSubmit = (data) => {
        props.handleSendMessage(data.newMessage)
        reset({
            newMessage : ''
        })
    }


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}> {mapDialogsItems}</div>

            <div className={s.messages}>
                {mapMessages}


                <form className={s.sendForm} onSubmit={handleSubmit(onSubmit)}>
                    <textarea {...register('newMessage')}/>
                    <button>Отправить</button>
                </form>


            </div>
        </div>
    )
}

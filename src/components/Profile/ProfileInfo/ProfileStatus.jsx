import React, {useState} from 'react';
import s from './../Profile.module.css'
import {useSelector} from "react-redux";

export const ProfileStatus = (props) => {

    const authMe = useSelector(state=> state.auth.id)
    const [editMode, setEditMode] = useState(false)
    const [selfProfile] = useState(props.profileId.userId === authMe)
    const [statusLocal, setStatusLocal] = useState(()=> props.status)

    const handleSetEditMode = (set) =>{
        if(selfProfile) setEditMode(set)
        setStatusLocal(()=> props.status)
    }
    const handleSetStatusLocal = (e) =>{
        setStatusLocal(()=> e.target.value)
    }
    return (
        <div className={`${s.profileStatus} ${editMode ? s.profileStatusEdit : ''}`}>
            {!editMode
                ?
                <p onClick={()=> handleSetEditMode(true)}>{props.status} {selfProfile && !props.status ? 'добавить статус...' : ''}</p>
                :
               <div className={s.profileStatusForm}>
                   <input
                       onBlur={()=> setTimeout(()=>handleSetEditMode(false), 300)}
                       autoFocus={true}
                       type="text"
                       value={statusLocal}
                       onChange={e => handleSetStatusLocal(e)}
                   />
                   <button onClick={() => props.setProfileStatus(statusLocal)}>Сохранить</button>
               </div>

            }
        </div>
    )
}


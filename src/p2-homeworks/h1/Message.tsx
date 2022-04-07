import React from 'react'
import s from './Message.module.css'

type MessagePropsTypes = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessagePropsTypes> = (props) => {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img className={s.img} src={props.avatar} alt="ava"/>

            </div>
            <div className={s.messageBlock}>
                <div className={s.nickName}>{props.name} :</div>
                <div className={s.quickMessageBlock}>
                    <div className={s.quickMessage}>{props.message}</div>
                    <div className={s.date}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message

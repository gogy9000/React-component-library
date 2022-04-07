import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать (ок не буду!)
    affair: AffairType // need to fix any!!!(fixed!)
    deleteAffairCallback: (_id:number)=>void // need to fix any!!!(fixed!)
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix(fixed!)

    return (
        <div className={s.affairBlock} >
            <span className={s.affair}>{props.affair.name}</span>


            <button onClick={deleteCallback}>delete</button>
        </div>
    )
}

export default Affair

import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

export type UserType ={
    _id: number
    name:string
    age:number
}


const initialPeople:Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
          <span>{p.name+' '+p.age}</span>
        </div>
    ))

    const sortUpAndDown = (vector:'up'|'down') => {
        setPeople(homeWorkReducer(people, {type: 'sort', payload: vector}))
    }

    const check18 = (checkAge:number) => {
      setPeople(homeWorkReducer(initialPeople,{type: 'check', payload: checkAge}))
    }

    return (
        <div>
            <hr/>
            homeworks 8

            {finalPeople}

            <div><SuperButton onClick={()=>{sortUpAndDown('up')}}>sort up</SuperButton></div>
            <div><SuperButton onClick={()=>{sortUpAndDown('down')}}>sort down</SuperButton></div>
           <div><SuperButton onClick={()=>{check18(16)}}>check 16</SuperButton></div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativePeople />
            <hr/>
        </div>
    )
}

export default HW8


const AlternativePeople = () => {
  return(
      <></>
  )
}
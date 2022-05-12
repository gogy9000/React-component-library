import React, {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {ActionsType, homeWorkReducer} from './bll/homeWorkReducer'
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
            <AlternativePeople people={people} setPeople={setPeople} finalPeople={finalPeople}/>
            <hr/>
        </div>
    )
}

export default HW8

type AlternativePeopleType={
    people:Array<UserType>
    setPeople: Dispatch<SetStateAction<UserType[]>>
    finalPeople:Array<JSX.Element>
}
const AlternativePeople:React.FC<AlternativePeopleType> = ({people, setPeople , finalPeople}) => {

    const [arr, setArr] = useState<Array<string>>([])
    const [value, onChangeOption] = useState<string>(arr[0])

    useEffect(()=> {
        let arrAge = people.map(item => String(item.age))
        setArr([...arrAge])
    },[])



    const check18 = (checkAge:string) => {
        let checkAgeNumber=Number(checkAge)
        onChangeOption(checkAge)
        setPeople(homeWorkReducer(initialPeople,{type: 'check', payload: checkAgeNumber}))
    }


    return (
        <div>
            <hr/>
            homeworks 8
            <div><SuperRadio name={'radio1'}
                             options={arr}
                             value={value}
                             onChangeOption={check18}/></div>
        </div>
            )
}
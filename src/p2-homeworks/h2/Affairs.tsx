import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2'

type AffairsPropsType = { // need to fix any(fixed!)
    data: Array<AffairType>

    setFilter:(filter:string)=>void
    deleteAffairCallback: (_id:number)=>void
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((affair: AffairType) => (

        <Affair // should work
            key={affair._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={affair}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const setAll = () => {props.setFilter('All')} // need to fix(fixed!)
    const setHigh = () => {props.setFilter('High')}
    const setMiddle = () => {props.setFilter('Middle')}
    const setLow = () => {props.setFilter('Low')}

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs

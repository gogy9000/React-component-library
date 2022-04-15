import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2'

type AffairsPropsType = {
    data: Array<AffairType>

    setFilter:(filter:string)=>void
    deleteAffairCallback: (_id:number)=>void
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((affair: AffairType) => (

        <Affair
            key={affair._id}
            affair={affair}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))


    const setAll = () => {props.setFilter('All')}
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

import React, {useState} from 'react'
import Affairs from './Affairs'



// types
export type AffairPriorityType = 'High' | 'Low' | 'Middle'// need to fix any(fixed!)
export type AffairType = { _id: number, name: string, priority: string } // need to fix any(fixed!)
export type FilterType = 'All' | AffairPriorityType

// constants


const defaultAffairs: Array<AffairType> = [ // need to fix any(fixed!)
    {_id: 1, name: 'React', priority: 'High'},
    {_id: 2, name: 'anime', priority: 'Low'},
    {_id: 3, name: 'games', priority: 'Low'},
    {_id: 4, name: 'work', priority: 'High'},
    {_id: 5, name: 'html & css', priority: 'Middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType) => { // need to fix any (fixed!)
    if (filter === 'All') return affairs
    else return (affairs.filter((affair:AffairType)=>affair.priority===filter))
}



export const deleteAffair = (affairs: Array<AffairType>, _id: number) => { // need to fix any!!!

    return (affairs.filter((affair: AffairType) => affair._id != _id))
}


function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any(fixed!)
    const [filter, setFilter] = useState<any>('All')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any(fixed!)



    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2

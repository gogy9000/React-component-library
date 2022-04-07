import React, {useState} from 'react'
import Affairs from './Affairs'



// types
export type AffairPriorityType = 'High' | 'Low' | 'Middle'
export type AffairType = { _id: number, name: string, priority: string }
export type FilterType = 'All' | AffairPriorityType

// constants


const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'High'},
    {_id: 2, name: 'anime', priority: 'Low'},
    {_id: 3, name: 'games', priority: 'Low'},
    {_id: 4, name: 'work', priority: 'High'},
    {_id: 5, name: 'html & css', priority: 'Middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType) => {
    if (filter === 'All') return affairs

    else return (affairs.filter((affair:AffairType)=>affair.priority===filter))
}
// эта функция фильтрует состояние(если фильтр находится в положении "All" то возвращает не филтрованый обЪект affairs,
// иначе фильтрует методом и возвращает те объекты в массиве у которых свойство priority строго равно значению в хуке filter


export const deleteAffair = (affairs: Array<AffairType>, _id: number) => {

    return (affairs.filter((affair: AffairType) => affair._id != _id))
}
// функция с помощью метода filter(не путать с хуком котрый ниже написан) возвращает только те объекты в массиве defaultAffairs,
// которые не равны значению _id  которое передается в функцию в качестве аргумена при вызове этой функции в deleteAffairCallback

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    // это хук в котором сидит defaultAffairs изначально и при нажатии на кнопку delete выкидывает один из обЪектов,
    // который в нем находится
    const [filter, setFilter] = useState<any>('All')
    //этот хук держит в себе значение по которому филЬтруется defaultAffairs

    const filteredAffairs = filterAffairs(affairs, filter)
    //переменная с отфильтрованным массивом defaultAffairs в качестве значения
    // filterAffairs фильтруется по массиву который сидит в Хуке affairs,
    // а не тот котрый в самом верху написан, то есть после удаления какого либо обЪекта массив в хуке affairs
    // будет фильтроваться с учетом того что из него обьекты могут быть удалены посредством функции deleteAffair

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))
    // вот здесь вызывается deleteAffair и вернувшееся значение сразу же залетает в хук setAffairs
    // deleteAffairCallback это колбек который вызывается в компоненте Affair(не путать с Affairs ) и при вызове в
    // качестве аргумента указывается _id того обЪекта который нужно удалить


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

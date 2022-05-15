import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 12, name: 'Алек', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 6, name: 'Ирин', age: 55},
        {_id: 7, name: 'Ирин', age: 18},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})


    expect(
        newState.reduce((acc,ell,index,arr)=> {
            if (index < arr.length - 1) {return ell.age <= arr[index + 1].age}
            else {return acc}
        }
    ,false)
    ).toBeTruthy()
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    expect(
        newState.reduce((acc,ell,index,arr)=> {
            if (index < arr.length - 1) {return ell.age >= arr[index + 1].age}
            else {return acc}
        }
        ,false)
    ).toBeTruthy()

})
test('check age ', () => {
    let action={type: 'check', payload: 16}
    const newState = homeWorkReducer(initialState, action)

    expect(
        newState.some((item)=>item.age!==action.payload)

    ).toBeFalsy()
})

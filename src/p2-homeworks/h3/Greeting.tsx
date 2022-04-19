import React from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: any) => void
    addUser: (e: any) => void
    error: boolean
    totalUsers: number
    users: Array<UserType>
    refreshValueCallBack: () => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users, refreshValueCallBack}
) => {

    let valueMessage = !error ? name : 'error'
    //если значение ранее не вводилось то держит значение в состоянии ввода
    //если значение ранее вводилось то выводит предупреждение прямо в инпут

    let refresh = () => refreshValueCallBack()
    //вызывает колобек который обнуляет инпут при клике на инпут после вывода предупреждения
    console.log(users)
    return (
        <div>

            {/*<input value={valueMessage} onChange={setNameCallback} onClick={refresh}*/}
            {/*       className={!error ? s.notError : s.error}/>*/}
            <SuperInputText value={valueMessage} onChange={setNameCallback} onClick={refresh}
                            className={error ? s.error : s.notError}/>


            <SuperButton onClick={addUser} red={error} disabled={error}>add</SuperButton>
            <span>{totalUsers}</span>


        </div>
    )
}

export default Greeting



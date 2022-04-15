import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {v1} from "uuid";


type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (user: UserType) => void
    error: boolean
    refreshValueCallBack: () => void
    setErrorCallBack: () => void
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                     error,
                                                                     refreshValueCallBack,
                                                                     setErrorCallBack
                                                                 }) => {

    const [name, setName] = useState<string>('')
    //стейт со значением из инпута

    let [totalUsers, setTotalUsers] = useState<number>(0)
    //счетчик срабатывает при нажатии кнопки "add"

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value) //еще не допер как типизировать ивенты
    // берет значение из инпута и присваевает его в setState

    const addUser = () => {
        let regExp = (/^\s+$/).test(name)
        //регулярка ищет совпадения, если от начала до конца одни тодько
        // пробелы, то возвращает true
        if (regExp || !name || !users.every((item: UserType) => item.name !== name)) {
            //если регулярка тру или не name тру или  в массиве уже есть обЪекты с
            // такими же значениями в свойстве name, то состояние error тру и name
            // пустая строка
            setErrorCallBack()
            return setName('')
        }
        addUserCallback({name: name.trim(), _id: v1()})
        //трим обрезает пробелы в начале и в конце
        setName('')
        setTotalUsers(totalUsers = users.length)
    }
    // при нажатии на кнопку, вызывает addUserCallback и отдает ему обЪект user в качестве аргумента,
    //потом обнуляет значение в setName
    //потом тикает счетчик setTotalUsers

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            users={users}
            refreshValueCallBack={refreshValueCallBack}
        />
    )
}

export default GreetingContainer

import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (user: UserType) => void
    error: boolean
    refreshValueCallBack: () => void
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                     error,
                                                                     refreshValueCallBack
                                                                 }) => {

    const [name, setName] = useState<string>('')
    //стейт со значением из инпута

    let [totalUsers, setTotalUsers] = useState<number>(0)
    //счетчик срабатывает при нажатии кнопки "add"

    const setNameCallback = (e: any) => setName(e.target.value) //еще не допер как типизировать ивенты
    // берет значение из инпута и присваевает его в setState

    const addUser = () => {
        addUserCallback({name: name, _id: users.length})
        setName('')
        setTotalUsers(++totalUsers)
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

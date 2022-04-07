import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'

// Я как обычно до конца не понял что требовалось, по этому теперь эта компонента  копит в стейте введеные значения
// в виде {_id:number, name:string} и не копит если значение в инпуте вводилось ранее, при этом меняет
// значение error=на true, от которого в свою очередь зависит цвет рамки в инпуте

// types
export type UserType = {
    _id: number | null
    name: string | null
}


function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([{_id: null, name: null}])
    // сверху основной стейт с массивом значений из инпута и _id в виде обЪектов
    const [error, setError] = useState<boolean>(false)
    // булевый переключатель стилей рамки  s.error|s.notError


    const addUserCallback = (user: UserType) => {
        users.every((item: UserType) => item.name !== user.name)
            ? setUsers([...users, user])
            : setError(true)
    }
    // функция проверяет введеное значение с со значениями которые вводились ранее
    // метод every пробегается по массиву и если совпадет хотя бы одно из ранее вводимых значений с введеным
    // только что значением переключает error на true,
    // если значение  ранее не было введено то пушит обЪект user в основной стейт

    const refreshValueCallBack = () => {
        setError(false)
    }
    //переключает обратно error на false при клике по инпуту

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}
                               error={error}
                               refreshValueCallBack={refreshValueCallBack}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3

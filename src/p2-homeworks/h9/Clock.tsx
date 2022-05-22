import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'


function Clock() {

    const getTime = () => {
        let hours = new Date().getHours()
        let minutes = new Date().getMinutes()
        let seconds = new Date().getSeconds()
        return `${hours < 10 ? 0 : ''}${hours}:${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
    }

    const [timerId, setTimerId] = useState<number>(0)
    let [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    const [time, setTime] = useState<string>(getTime())

    const start = () => {
        stop()
        let id: number = window.setInterval(() => {
            setTime(getTime())
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const stop = () => {
        clearInterval(timerId)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = time

    const stringDate = date.toLocaleDateString()


    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onMouseDown={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock

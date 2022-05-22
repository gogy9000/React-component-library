import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'


function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    let [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    let [seconds, setSeconds]= useState<number>(0)
    let [minutes, setMinutes]= useState<number>(0)
    let [hours, setHours]= useState<number>(0)

    const getTime = () => {
        setHours(hours===23&&minutes===59&&seconds===59?hours=0:minutes===59&&seconds===59?hours=hours+1:hours)
        setMinutes(minutes===59&&seconds===59?minutes=0:seconds===59?minutes=minutes+1:minutes)
        setSeconds(seconds===59?seconds=0:seconds=seconds+1)


    }

    const start = () => {
        stop()
        let id: number = window.setInterval(() => {
            getTime()
        }, 10)
        setTimerId(id)
    }
    const stop = () => {
        clearInterval(timerId)
        setSeconds(0)
        setMinutes(0)
        setHours(0)

    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = `${hours<10?0:''}${hours}:${minutes<10?0:''}${minutes}:${seconds<10?0:''}${seconds}`
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

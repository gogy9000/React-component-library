import React, {useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {v1} from "uuid";

export const AlternativeClock = () => {

    const [id, setTimerId] = useState<number>(0)
    const [checkPoints, setCheckPoints] = useState<Array<string>>([])

    let [milliseconds, setMilliseconds] = useState<number>(0)
    let [seconds, setSeconds] = useState<number>(0)
    let [minutes, setMinutes] = useState<number>(0)
    let [hours, setHours] = useState<number>(0)

    const getTime = () => {
        setHours(hours === 23 && minutes === 59 && seconds === 59 ? hours = 0 : minutes === 59 && seconds === 59 && milliseconds === 99 ? hours = hours + 1 : hours)
        setMinutes(minutes === 59 && seconds === 59 ? minutes = 0 : seconds === 59 && milliseconds === 99 ? minutes = minutes + 1 : minutes)
        setSeconds(seconds === 59 && milliseconds === 99 ? seconds = 0 : milliseconds === 99 ? seconds = seconds + 1 : seconds)
        setMilliseconds(milliseconds === 99 ? milliseconds = 0 : milliseconds = milliseconds + 1)
    }

    const start = () => {
        stop()
        let id: number = window.setInterval(() => {
            getTime()
        }, 10)
        setTimerId(id)
    }

    const stop = () => {
        clearInterval(id)
    }

    const reset = () => {
        clearInterval(id)
        setMilliseconds(0)
        setSeconds(0)
        setMinutes(0)
        setHours(0)
    }

    const onCheckpoint = () => {
        setCheckPoints([stringTime, ...checkPoints])
    }
    const clearCheckpoints = () => {
        setCheckPoints([])
    }

    const stringTime = `${hours < 10 ? 0 : ''}${hours}:${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}:${milliseconds < 10 ? 0 : ''}${milliseconds}`

    const stringCheckpoints = checkPoints?.map((checkPoint: string) => <div key={v1()}>{checkPoint}</div>)

    return (
        <div>
            <div>
                {stringTime}
            </div>

            <SuperButton onMouseDown={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
            <SuperButton onClick={onCheckpoint}>check</SuperButton>
            <SuperButton onClick={clearCheckpoints}>clear</SuperButton>
            <SuperButton onClick={reset}>reset</SuperButton>

            <div>
                {stringCheckpoints}
            </div>
        </div>
    )
}

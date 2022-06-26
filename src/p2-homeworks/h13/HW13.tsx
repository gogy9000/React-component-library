import React, {useEffect, useState} from "react"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestsAPI} from "./RequestsAPI";

export const HW13 = () => {

    return (
        <>
            <Request/>
        </>
    )
}

export const Request = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [response, setResponse] = useState<string>('')

    const fetchRequest = () => {
        RequestsAPI.post(isChecked)
            .then((res) => {
                    console.log(res.statusText)
                    setResponse(res.statusText)
                }
            ).catch((error) => {
                setResponse(error.response ? error.response.data.errorText : error.message)
            }
        )
    }

    return (
        <>
            <div>
                <SuperButton onClick={fetchRequest}> dispatch request </SuperButton>
                <SuperCheckbox  checked={isChecked}
                               onChangeChecked={setIsChecked}/>
            </div>
            <div>{response}</div>
        </>
    )
}
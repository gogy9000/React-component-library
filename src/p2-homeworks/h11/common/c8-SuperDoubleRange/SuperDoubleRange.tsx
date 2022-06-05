import React from 'react'
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';


type SuperDoubleRangePropsType = {
    setValue1: React.Dispatch<React.SetStateAction<number>>
    setValue2: React.Dispatch<React.SetStateAction<number>>
    value?: number[]
    min?: number
    max?: number
    step?: number
    disable?: boolean
}

export const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {
    let {value, min, max, step, setValue1, setValue2} = props

    const onChangeCallback = (val: any) => {

        setValue1(val[0] as number)
        setValue2(val[1] as number)
    }


    return (

        <div style={{width: 130, margin: 10}}>

            <Slider range
                    handleStyle={{
                        backgroundColor: "rgb(0 117 255)", height: 14, opacity: 1,
                        border: "none", marginTop: -3, boxShadow: "none"
                    }}
                    trackStyle={{border: "1px solid rgb(59 117 186)", backgroundColor: "rgb(0 117 255)", height: 8}}
                    railStyle={{border: "1px solid darkGray", height: 8}}
                    onChange={onChangeCallback}
                    value={value}
                    min={min}
                    max={max}/>
        </div>


    )

}



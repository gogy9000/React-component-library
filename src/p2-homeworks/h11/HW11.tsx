import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from './common/c8-SuperDoubleRange/SuperDoubleRange'


function HW11() {
    const [value1, setValue1] = useState(35)
    const [value2, setValue2] = useState(75)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div style={{display:"flex",justifyContent:'center',alignItems:"center", padding:5}}>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    setValue1={setValue1}
                    setValue2={setValue2}
                />
                <span>{value2}</span>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11


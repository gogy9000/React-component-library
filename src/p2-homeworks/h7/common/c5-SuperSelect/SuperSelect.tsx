import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const mappedOptions: JSX.Element[] | undefined = options ? options.map((item: string, index: number) =>
        <option key={item+'-'+index} value={item}
        >{item}</option>) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {

        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select value={value} name={'select'} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect

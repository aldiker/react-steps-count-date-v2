import { useState } from 'react'
import Button from './Button'

function Counter(props) {
    const { text, deltaValue, value, setValue } = props

    const handlerIncreaseBtn = () => {
        setValue(value + deltaValue)
    }

    const handlerDecreaseBtn = () => {
        setValue(value - deltaValue)
    }

    return (
        <>
            <Button text="-" handler={handlerDecreaseBtn} />
            <span style={{ margin: 10 }}>
                {text}: {value}
            </span>
            <Button text="+" handler={handlerIncreaseBtn} />
        </>
    )
}

export default Counter

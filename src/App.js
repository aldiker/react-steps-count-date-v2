import { useState } from 'react'
import Counter from './components/Counter'
import Button from './components/Button'

function App() {
    const [stepValue, setStepValue] = useState(3)
    const [counterValue, setCounterValue] = useState(0)

    const currentDay = new Date().toDateString()

    const date = new Date(currentDay)
    date.setDate(date.getDate() + counterValue)

    const handlerIncreaseBtn = () => {
        setCounterValue(counterValue + stepValue)
    }

    const handlerDecreaseBtn = () => {
        setCounterValue(counterValue - stepValue)
    }

    return (
        <div className="App">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={stepValue}
                    onChange={() => setStepValue(+event.target.value)}
                />
                <span>{stepValue}</span>
            </div>

            <div>
                <Button text="-" handler={handlerDecreaseBtn} />
                <input
                    type="text"
                    value={counterValue}
                    onChange={() => setCounterValue(+event.target.value)}
                />
                <Button text="+" handler={handlerIncreaseBtn} />
            </div>

            {stepValue !== 1 || counterValue !== 0 ? (
                <button
                    onClick={() => {
                        setStepValue(1)
                        setCounterValue(0)
                    }}
                >
                    Reset
                </button>
            ) : null}
            <p>
                <span>
                    {counterValue === 0
                        ? 'Today is '
                        : counterValue > 0
                        ? `${counterValue} days from today is `
                        : `${Math.abs(counterValue)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </p>
        </div>
    )
}

export default App

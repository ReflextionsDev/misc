import React, { useEffect, useState, useMemo } from 'react'

function countInit() {
    console.log('count init')
    return 4
}

export default function ReactHooks() {

    // useState
    const [count, setCount] = useState(() => countInit())

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    // useEffect
    const [windowWidth, setwindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => setwindowWidth(window.innerWidth))
        return window.removeEventListener('resize', () => setwindowWidth(window.innerWidth))
    }, [])

    // useMemo
    const [num, setNum] = useState(1)
    const doubleNumber = useMemo(() => {
        return slowFunction(num)
    }, [num])


    return (
        <div>
            {/* State */}
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>

            {/* Effect */}
            <div>{windowWidth}</div>

            {/* Memo */}
            <div>{doubleNumber}</div>
        </div>
    )
}

function slowFunction(num) {
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2
}
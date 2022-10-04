import React, { useEffect, useState } from 'react'

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
    

    return (
        <div>
            {/* State */}
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
            
            {/* Effect */}
            <div>{windowWidth}</div>

            {/* Memo */}
        </div>
    )
}

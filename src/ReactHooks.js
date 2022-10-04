import React, { useEffect, useState, useMemo, useRef } from 'react'

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

    // useRef
    // { current: 0 }
    // Used to prevent infinite rerender
    const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current += 1
    })

    // Used to ref HTML elem
    const [name, setName] = useState('')
    const inputRef = useRef()

    function focus() {
        inputRef.current.focus()
    }

    // Used for previous value
    const prevName = useRef('')

    useEffect(() => {
        prevName.current = name
    }, [name])



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

            {/* useRef */}
            <div>I rendered {renderCount.current}</div>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}></input>
            <div>Name: {name} Previous Name: {prevName.current}</div>
            <button onClick={focus}>Focus</button>

        </div>
    )
}

function slowFunction(num) {
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2
}
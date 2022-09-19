// https://reactjs.org/docs/hooks-overview.html
// https://reactjs.org/docs/hooks-reference.html#usecontext

import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from './App'

export default function ReactPractice(props) {

    // Props
    console.log('props', props)
    const { stuff, color, startName, obj } = props
    console.log('color', color)
    console.log(startName)

    // useState
    const [count, setCount] = useState(0)
    const [name, setName] = useState(startName)

    // Effect
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `${count}`;
        console.log('use effect!')
    });

    // useContext

    let contextVar = useContext(MyContext)
    console.log('context', contextVar)

    return (

        <div>
            <h1>React Practice</h1>

            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>
                    Plz click
                </button>
            </div>

            <div>
                <label>Input</label>
                <input
                    id='name'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

            </div>

            <div>
                <p>Context: {contextVar[0]}</p>
                {/* <button onClick={() => (updateContext('new context data'))}>
                    Change Context
                </button> */}
            </div>


        </div>
    )
}

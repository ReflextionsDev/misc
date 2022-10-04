import './App.css';
import ReactPractice from './ReactPractice';
import React, { useState } from 'react';
import ReactAssignment from './ReactAssignment';

const testProps = ['hello', 123, 'x gun give it to ya']
const color = 'green'
const startName = 'jacob'
const obj = {
  wunk: "yes",
  prop2: "no"
}

// Context

export const MyContext = React.createContext()

function App() {

  const contextDummyData = ['context', 'data', 'yeeet']
  const [contextData, setContextData] = useState(contextDummyData)
  
  // const updateContext = (data) => {
  //   setContextData(data)
  // }

  return (
    <div className="App">
      {/* <MyContext.Provider value={{contextDummyData}} >
        <ReactPractice stuff={testProps} color={color} startName={startName} obj={obj} />
      </MyContext.Provider> */}
      <ReactAssignment/>
    </div>
  );

}

export default App;

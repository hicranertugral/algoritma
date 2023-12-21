import { useState } from 'react'

import './App.css'
import Pipe from './components/Pipe'
import Screen from './components/Screen'
import { getMaxValueFromArray } from './utils';

const dummyData = [3,6,9,8,5,2,1,4,7,10];
const maxValue = getMaxValueFromArray(dummyData);
const factor = 100 / maxValue;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Screen>
          {dummyData.map((value) => {
              return <Pipe style={{height: `${factor * value}%`}} />
          })}
        </Screen>
      </div>
    </>
  )
}

export default App

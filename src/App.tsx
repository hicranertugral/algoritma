import { useEffect, useState } from 'react'

import './App.css'
import Pipe from './components/Pipe'
import Screen from './components/Screen'
import { bubbleSort, getMaxValueFromArray, selectionSort } from './utils';

const dummyData = [3, 6, 9, 10, 11, 8, 5, 2, 1, 4, 7, 10];
const maxValue = getMaxValueFromArray(dummyData);
const factor = 100 / maxValue;

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // bubbleSort(dummyData);
    selectionSort(dummyData);

    console.log(dummyData);
   }, [])

  return (
    <>
      <div>
        <Screen>
          {dummyData.map((value) => {
            return <Pipe key={value} style={{ height: `${factor * value}%` }} />
          })}
        </Screen>
      </div>
    </>
  )
}

export default App

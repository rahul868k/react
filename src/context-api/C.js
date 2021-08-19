import Count from './context-api/count';
import Display from './context-api/display';

import React,{createContext,useState} from 'react'

export const store =createContext()

const App = () => {
  const [data, setData] = useState(
    [
      {
        brand:'nokia'
      },
      {
        brand:'motorola'
      },
      {
        brand:'iphone'
      },
      {
        brand:'blackberry'
      }
    ]
  )

  return (
    <store.Provider value={[data,setData]}>
      <Count></Count>
      <Display></Display>
      
    </store.Provider>
  )
}

export default App

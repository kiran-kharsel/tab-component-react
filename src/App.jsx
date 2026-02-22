import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TabList from './components/tabList/TabList'

import TAB_CONFIG from './constants/tabs.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Tabs Component</h1>
     <TabList tabs={TAB_CONFIG}/>
    </>
  )
}

export default App

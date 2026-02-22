import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TabList from './components/tabList/TabList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Tabs Component</h1>
     <TabList/>
    </>
  )
}

export default App

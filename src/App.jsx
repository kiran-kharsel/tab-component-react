
import './App.css'
import TabList from './components/tabList/TabList'

import TAB_CONFIG from './constants/tabs.js'


function App() {


  return (
    <>

     <TabList tabs={TAB_CONFIG}/>
    </>
  )
}

export default App

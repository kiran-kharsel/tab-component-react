import React, { useState } from 'react'
import './style.css'
import Button from '../button'

function TabList({tabs}) {
  const [selectedIndex, setSelectedIndex] = useState(0)


  function handleTabChange(index){
    return ()=>{
      setSelectedIndex(index)
    }
  };


  return (
    <div className='tabList'>
      <div className="tabHeader">
        {
          tabs.map((tab, index) => {
            return <Button 
            key={tab.id} 
            label={tab.label}
            onclick={handleTabChange(index)}
            />
          })
        }
      </div>
      <div className="tabContent">
        {
          tabs[selectedIndex].content
        }
      </div>
    </div>
  )
}

export default TabList
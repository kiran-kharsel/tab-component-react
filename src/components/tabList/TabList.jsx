import React from 'react'
import './style.css'
import Button from '../button'

function TabList({tabs}) {
  return (
    <div className='tabList'>
      <div className="tabHeader">
        {
          tabs.map((tab, index) => {
            return <Button key={tab.id} label={tab.label}/>
          })
        }
      </div>
      <div className="tabContent"></div>
    </div>
  )
}

export default TabList
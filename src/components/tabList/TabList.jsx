import React, { useState, useRef, useEffect } from 'react'
import './style.css'
import Button from '../button'


// constant
const WIDTH = 900;

function TabList({tabs}) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [width, setWidth] = useState(0);

  const tabsStripeRef = useRef(null)
  const widthRef = useRef()




  useEffect(()=>{
    console.log(tabsStripeRef.current.offsetWidth)
    setWidth(tabsStripeRef.current.offsetWidth)
  }, [])

  function handleTabChange(index){
    return ()=>{
      setSelectedIndex(index)
    }
  };


  return (
    <div className='tabList'>
      <div className="tabHeader">
        <Button label={'<'}/>
        
        <div ref={tabsStripeRef} className="tabsStripe">
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

        {width > WIDTH && <Button label={'>'}/>}
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
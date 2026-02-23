import React, { useState, useRef, useEffect } from 'react'
import './style.css'
import Button from '../button'


// constant
const WIDTH = 900;

function TabList({tabs}) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [width, setWidth] = useState(0);
  const [positionLeft, setPositionLeft] = useState(0);

  const tabsStripeRef = useRef(null)


  useEffect(()=>{
    console.log(tabsStripeRef.current.offsetWidth)
    setWidth(tabsStripeRef.current.offsetWidth)
    setPositionLeft(tabsStripeRef.current.offsetLeft)
  }, [])

  function handleTabChange(index){
    return ()=>{
      setSelectedIndex(index)
    }
  };

  
  return (
    <div className='tabList'>
      <div className="tabHeader">
        <div className="prev-btn btn">
          {positionLeft > 0 && <Button label={'<'}/>}
        </div>

        <div className="next-btn btn">
          {/* {width > 900 && <Button label={'>'}/>} */}
        {width > 800 ? (<Button label={'>'}/>) : null}
        </div>
        
        
        <div ref={tabsStripeRef} className="tabsStripe">
          {
          tabs.map((tab, index) => {
            return <Button 
            key={tab.id} 
            label={tab.name}
            onclick={handleTabChange(index)}
            />
          })
        }
        </div> 
        

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
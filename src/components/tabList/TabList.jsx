import React, { useState, useRef, useEffect } from 'react'
import './style.css'
import Button from '../button'


// constant
const WIDTH = 800;

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

  function handleNextBtnClick(){
    console.log('next btn clicked')
    setPositionLeft(prev => {
      const newPosition = prev - 100;
      tabsStripeRef.current.style.transform = `translateX(${newPosition}px)`;
      return newPosition
    })
    
    //setPositionLeft(tabsStripeRef.current.offsetLeft)
  }

  
  return (
    <div className='tabList'>
      <div className="tabHeader">
        <div className="prev-btn btn">
          {positionLeft > 0 && <Button label={'<'}/>}
        </div>

        <div className="next-btn btn">
          {width > WIDTH && <Button label={'>'} onclick={handleNextBtnClick}/>}
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
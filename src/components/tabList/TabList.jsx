import React, { useState, useRef, useEffect } from 'react'
import './style.css'
import Button from '../button'


// constant
const WIDTH = 800;

function TabList({tabs}) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [stripeWidth, setStripeWidth] = useState(0);
  const [positionLeft, setPositionLeft] = useState(0);

  const tabsStripeRef = useRef(null)


  useEffect(()=>{
    setStripeWidth(tabsStripeRef.current.offsetWidth)
    setPositionLeft(tabsStripeRef.current.offsetLeft)
  }, [])

  function handleTabChange(index){
    return ()=>{
      setSelectedIndex(index)
    }
  };

  function handleNextBtnClick(){
    setPositionLeft(prev => prev - 50);
  }

  function handlePrevBtnClick(){
    setPositionLeft(prev => prev + 50)
  }

  
  return (
    <div className='tabList'>
      <div className="tabHeader">
        <div className="prev-btn btn">
          {positionLeft < 0 && <Button label={'<'} onclick={handlePrevBtnClick}/>}
        </div>

        <div className="next-btn btn">
          {(stripeWidth > WIDTH && (positionLeft >= WIDTH - stripeWidth)) 
          && <Button label={'>'} onclick={handleNextBtnClick}/>}
        </div>
        
        
        <div 
        style={{
          transform: `translateX(${positionLeft}px)`,
          transition: "transform 0.3s ease",
        }}
        ref={tabsStripeRef} className="tabsStripe">
          {
          tabs.map((tab, index) => {
            return <Button 
            data-active = {index === selectedIndex}
            key={tab.id} 
            label={tab.name}
            onclick={handleTabChange(index)}
            />
          })
        }
        </div> 
        

      </div>


      <div className="tabContent">
        <div className="tabContentImage">
          <img src={tabs[selectedIndex].image} alt="" />
        </div>
        <div className="tabContentDesc">
          <div>
            {tabs[selectedIndex].description}
          </div>
          <div>
            {tabs[selectedIndex].country}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabList
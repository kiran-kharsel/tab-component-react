import React from 'react'
import './style.css'

function Button({label, onclick = ()=>{}, ...rest}) {
  return (
    <button onClick={onclick} {...rest}>
        {label}
    </button>
  )
}

export default Button
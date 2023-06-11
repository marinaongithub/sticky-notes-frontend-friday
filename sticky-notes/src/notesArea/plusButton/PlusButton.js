import React from 'react'
import "./plusButton.css"

function PlusButton(props) {

  return (
  
    <div>
      <button className="plus" onClick={props.handlePlusClick}>+</button>
    </div>
   
  )
}

export default PlusButton
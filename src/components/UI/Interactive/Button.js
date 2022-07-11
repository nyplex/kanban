import React from 'react'

const Buttons = (props) => {
  return (
    <button onClick={props.onClick} className={props.classes}>{props.children}</button>
  )
}

export default Buttons
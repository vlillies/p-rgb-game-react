import React from 'react'
import classes from './Tile.css'

const Tile = (props) => {

  let activeClasses = [classes.Tile]

  if(props.gameWon){
    activeClasses.push(classes.Won)
  } else if(props.disabled){
    activeClasses.push(classes.Disabled)
  }



  let displayClasses = activeClasses.join(" ")

  return (
          <div onClick={props.clicked} className={displayClasses} style={{background: props.color}}>
          </div>
  )
}

export default Tile
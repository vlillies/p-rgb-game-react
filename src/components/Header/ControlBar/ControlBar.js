import React from 'react'
import { Button } from 'react-bootstrap'
import classes from './ControlBar.css'

const controlBar = () => {
  return (
    <div className={classes.ControlBar} >
      <div className={classes.btn} style={{marginRight: 'auto'}}>
        <Button bsStyle="primary">Hello</Button>
      </div>
      <div className={classes.btn}>
        <Button  bsStyle="primary">Hello</Button>
      </div>
      <div className={classes.btn}>
        <Button bsStyle="primary">Hello</Button>
      </div>
    </div>
  )
}

export default controlBar


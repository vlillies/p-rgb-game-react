import React from 'react'
import Auxil from '../../hoc/Auxil'
import ControlBar from './ControlBar/ControlBar'

import classes from './Header.css'
import { Button, ButtonToolbar } from 'react-bootstrap'

const header = () => {
    return (
      <div className={classes.Header}>
        <h1 style={{marginTop: '0', paddingTop: '5px'}}>The GREAT</h1>
        <h1>RGB GUESSING GAME</h1>
        <h1>RGB(255, 255, 255)</h1>
        <ControlBar/>
      </div>
  )
}

export default  header




import React from 'react'
import classes from './Tile.css'
import {Col} from 'react-bootstrap'

const Tile = (props) => {
  return (
        <Col xs={12} sm={6} md={4}>
          <div onClick={props.clicked} className={classes.Tile} style={{backgroundColor: props.color}}>
          </div>
        </Col>
  )
}

export default Tile
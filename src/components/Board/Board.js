import React from 'react'
import Tile from './Tile/Tile'
import {Col} from 'react-bootstrap'

const board = (props) => {

  const tiles = props.tiles.map(el=>((
      <Tile key={el.id} color={el.color} clicked={() => props.clicked(el.id)}/>
    )))

  return (

          <div>
            {tiles}
          </div>
  )
}

export default board
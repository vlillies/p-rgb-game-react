import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Board from '../../components/Board/Board'
import Auxil from '../../hoc/Auxil'
import {Grid, Row, Col } from 'react-bootstrap'
class App extends Component {
  state = {
    tiles: [
      {id: 1, color: 'red', clicked: false, win: false},
      {id: 2, color: 'blue', clicked: false, win: false},
      {id: 3, color: 'green', clicked: false, win: false},
      {id: 4, color: 'yellow', clicked: false, win: false},
      {id: 5, color: 'purple', clicked: false, win: false},
      {id: 6, color: 'salmon', clicked: false, win: false}
    ]
  }

  onClickedHandler = (id) => {
    const tiles = [...this.state.tiles]
    const tileIndex = tiles.findIndex(el => el.id === id)
    const tile = tiles.splice(tileIndex, 1)
    tile.clicked = true
    tiles.push(tile)
    console.log(this.state.tiles)
    console.log(tiles)
    this.setState({tiles})
  }

  render() {
    return (
      <Grid>
        <Row style={{paddingTop: '0'}}>
          <Col>
            <Header/>
            <Board tiles={this.state.tiles} clicked={this.onClickedHandler}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

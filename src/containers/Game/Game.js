import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Board from '../../components/Board/Board'
import ControlBar from '../../components/ControlBar/ControlBar'

import { Container, Confirm } from 'semantic-ui-react'

class App extends Component {
  state = {
    tiles: [],
    gameWon: false,
    boardSize: 6,
    targetColor: '',
    headerColor: 'red',
    open: false
  }

  componentWillMount(){
    this.initializeBoard()
  }

  randomRGB() {
    let tR = Math.floor((Math.random() * 256));
    let tG = Math.floor((Math.random() * 256));
    let tB = Math.floor((Math.random() * 256));
    return("rgb(" + tR + ", " +tG +", " + tB +")");
  }

  generateTile(id) {
    return {id: id, color: this.randomRGB(), clicked: false, win: false}
  }

  initializeBoard() {
    let tiles = []
    for(let i = 0; i < this.state.boardSize; i++){
      tiles.push(this.generateTile(i))
    }
    let targetIndex = Math.floor((Math.random() * this.state.boardSize))
    tiles[targetIndex].win = true
    let targetColor = tiles[targetIndex].color
    this.setState({win: false, tiles, targetColor})
  }

  gameWon() {
    let tiles = []
    for(let i of this.state.tiles){
      let tile = {...i}
      tile.color = this.state.targetColor
      tile.clicked = false
      tiles.push(tile)
    }
    this.setState({tiles, gameWon: true, headerColor: this.state.targetColor}, () => {setTimeout(()=>{
      this.setState({open: true})
      }, 1000)}
    )
  }

  handleTileSelect = (id) => {
    const tileIndex = this.state.tiles.findIndex(el => el.id === id)
    if(this.state.tiles[tileIndex].win){
      this.gameWon()
    } else {
      const clickedTile = {...this.state.tiles[tileIndex]}
      clickedTile.clicked = true
      const tiles = [...this.state.tiles]
      tiles[tileIndex] = clickedTile
      this.setState({tiles})
    }
  }

  handleDifficultySelect = (mode) => {
    let boardSize = mode === 'easy' ? 3 : 6
    this.setState({boardSize, gameWon: false}, () => this.initializeBoard())
  }

  handleReset = () => {
    this.initializeBoard()
  }

  handleCancel = () => {
    this.setState({open: false})
  }

  handleConfirm = () => {
    this.setState({open: false, gameWon: false}, () => this.initializeBoard())
  }

  render() {
    return (
          <Container>
            <Header headerColor={this.state.headerColor} targetColor={this.state.targetColor}/>
            <ControlBar clicked={this.handleDifficultySelect} message={this.state.message} reset={this.handleReset}/>
            <Board gameWon={this.state.gameWon} tiles={this.state.tiles} clicked={this.handleTileSelect}/>
            <Confirm
              open={this.state.open}
              header='You won, great job!'
              content='Play again?'
              cancelButton='No thanks'
              confirmButton="Let's do it!"
              onCancel={this.handleCancel}
              onConfirm={this.handleConfirm}
            />
          </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Game from './containers/Game/Game'
import Auxil from './hoc/Auxil'

class App extends Component {
  render() {
    return (
     <Auxil>
       <Game/>
     </Auxil>
    );
  }
}

export default App;

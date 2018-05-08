import React from "react";
import Tile from "../Tile/Tile";

import { Grid } from "semantic-ui-react";

const board = props => {
  const tiles = props.tiles.map(el => (
    <Grid.Column key={el.id}>
      <Tile
        gameWon={props.gameWon}
        disabled={el.clicked}
        id={el.id}
        color={el.color}
        clicked={() => props.clicked(el.id)}
      />
    </Grid.Column>
  ));

  return (
    <Grid stackable doubling columns={3} style={{ padding: "14px 0" }}>
      {tiles}
    </Grid>
  );
};

export default board;

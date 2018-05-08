import React from "react";
import { Grid, Button } from "semantic-ui-react";

const controlBar = props => {
  const resetButton = (
    <Button onClick={props.reset} color="red" floated="left">
      Reset
    </Button>
  );

  const difficultyButtons = (
    <Button.Group floated="right">
      <Button onClick={() => props.clicked("easy")} color="green">
        Easy
      </Button>
      <Button.Or />
      <Button onClick={() => props.clicked("hard")} color="orange">
        Hard
      </Button>
    </Button.Group>
  );

  const message = <p style={{ display: "inline-block" }}>{props.message}</p>;

  return (
    <Grid style={{ marginTop: 0, backgroundColor: "white" }}>
      <Grid.Row columns={3}>
        <Grid.Column>{resetButton}</Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="center">
          {message}
        </Grid.Column>
        <Grid.Column>{difficultyButtons}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default controlBar;

import React from "react";
import { Grid, Popup, Icon } from "semantic-ui-react";

const header = props => {
  return (
    <Grid padded="vertically" style={{ backgroundColor: props.headerColor }}>
      <Grid.Column style={{ color: "white" }} textAlign="center">
        <Popup
          trigger={
            <Icon
              style={{ position: "absolute", right: "5px", top: "0" }}
              name="help"
              color="blue"
              size="large"
              circular
            />
          }
          content="Find the tile matching the given RGB color code.  "
        />
        <h1 style={{ margin: "0" }}>
          THE GREAT<br />RGB GUESSING GAME
        </h1>

        <Popup
          trigger={
            <h1
              style={{
                textTransform: "uppercase",
                margin: "7px",
                color: "black",
                backgroundColor: "white",
                padding: "10px",
                display: "inline-block"
              }}
            >
              {props.targetColor}
            </h1>
          }
          content="Try to find this color!"
          position="bottom center"
        />
      </Grid.Column>
    </Grid>
  );
};
export default header;

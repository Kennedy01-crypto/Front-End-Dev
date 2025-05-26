import { createUseStyles } from "react-jss";
import React from "react";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "lightgreen",
    padding: "18px",
    borderRadius: "4px",
  },
  heading: {
    color: "darkslategray",
    fontSize: "1.1em",
    marginBottom: "8px",
  },
});

function MyJSSComponent() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>Styled with JSS</h3>
    </div>
  );
}

export default MyJSSComponent;

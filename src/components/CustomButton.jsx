import { Button, createStyles, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: 49,
      minWidth: 202,
      padding: "0 26px",
      borderRadius: 36,
      boxShadow: 'none',
    },
    label: {
      fontWeight: 600,
      textTransform: "none",
      fontSize: "0.875rem",
    },
  })
);

export default function CustomButton(props) {
  const classes = useStyles(props);
  return <Button {...props} classes={classes} />;
}

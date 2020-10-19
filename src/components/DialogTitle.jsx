import { createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontWeight: 600,
      color: theme.palette.grey.c70,
    },
  })
);

export default function CustomDialogTitle(props) {
  const classes = useStyles(props);
  return (
    <Typography align="center" variant="h5" {...props} classes={classes} />
  );
}

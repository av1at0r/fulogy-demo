import { createStyles, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import CustomButton from "./CustomButton";
import CustomDialog from "./CustomDialog";
import CustomDialogTitle from "./DialogTitle";
const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: 318,
      paddingTop: 84,
    },

    closeButton: {
      marginTop: 42,
    },
    [theme.breakpoints.down('sm')]: {
      paper: {
        minHeight: 0,
        padding: 30
      }
    }
  })
);

export default function AlertDialog({
  onClose,
  title,
  closeButtonText,
  ...props
}) {
  const classes = useStyles();
  return (
    <CustomDialog
      maxWidth="sm"
      fullWidth
      {...props}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      classes={{ paper: classes.paper }}
    >
      <CustomDialogTitle component="h1" id="alert-dialog-title">
        {title}
      </CustomDialogTitle>
      <Hidden implementation="css" smDown>
        <CustomButton
          autoFocus
          className={classes.closeButton}
          variant="contained"
          color="primary"
          onClick={onClose}
        >
          {closeButtonText}
        </CustomButton>
      </Hidden>
    </CustomDialog>
  );
}

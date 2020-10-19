import { createStyles, Dialog, makeStyles } from "@material-ui/core";
import React from "react";
import CustomButton from "./CustomButton";
import CustomDialogTitle from "./DialogTitle";
const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      minHeight: 318,
      paddingTop: 84,
    },

    closeButton: {
      marginTop: 42,
    },
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
    <Dialog
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
      <CustomButton
        className={classes.closeButton}
        variant="contained"
        color="primary"
        onClick={onClose}
      >
        {closeButtonText}
      </CustomButton>
    </Dialog>
  );
}

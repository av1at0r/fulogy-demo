import {
  createStyles,
  Dialog,
  IconButton,
  makeStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import CustomButton from "./CustomButton";
import CustomDialogTitle from "./DialogTitle";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      minHeight: 318,
    },
    headline: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "17px 17px 9px 0",
      boxSizing: "border-box",
    },
    controls: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 32,
    },

    control: {
      "& + &": {
        marginTop: 28,
      },
    },
  })
);

export default function ConfirmationDialog({
  onClose,
  title,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      {...props}
      onClose={onClose}
      aria-labelledby="confirmation-dialog-title"
      classes={{ paper: classes.paper }}
    >
      <div className={classes.headline}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <CustomDialogTitle component="h1" id="confirmation-dialog-title">
        {title}
      </CustomDialogTitle>
      <div className={classes.controls}>
        <CustomButton
          className={classes.control}
          variant="contained"
          color="primary"
          onClick={onConfirm}
        >
          {confirmButtonText}
        </CustomButton>
        <CustomButton
          className={classes.control}
          variant="outlined"
          color="primary"
          onClick={onClose}
        >
          {cancelButtonText}
        </CustomButton>
      </div>
    </Dialog>
  );
}

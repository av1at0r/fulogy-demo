import { createStyles, makeStyles, Typography } from "@material-ui/core";
import cn from "classnames";
import React from "react";

const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      padding: "10px 77px",
      minHeight: 96,
    },
    icon: {
      display: "flex",
      alignItems: "center",
      fontSize: 36,
      color: theme.palette.primary.main,
    },
    text: {
      fontSize: "1.125rem",
      marginLeft: 25,
    },
  });
});

export default function ProfileInfoItem({ icon, text, className, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={cn(classes.root, className)}>
      <div className={classes.icon}>{icon}</div>
      <Typography className={classes.text}>{text}</Typography>
    </div>
  );
}

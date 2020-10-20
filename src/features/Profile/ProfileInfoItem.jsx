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
      fontSize: theme.typography.pxToRem(36),
      color: theme.palette.primary.main,
    },
    text: {
      marginLeft: 25,
    },
    [theme.breakpoints.down('sm')]: {
      root: {
        paddingLeft: 10,
        minHeight: 64,
      },
      icon: {
        fontSize: theme.typography.pxToRem(24),
      },
      text: {
        marginLeft: 10,
      }
    }
  });
});

export default function ProfileInfoItem({ icon, text, className, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={cn(classes.root, className)}>
      <div className={classes.icon}>{icon}</div>
      <Typography variant="subtitle1" className={classes.text}>{text}</Typography>
    </div>
  );
}

import {
  Avatar,
  createStyles,
  Divider,
  IconButton,
  makeStyles,
  Typography
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-end",
      color: theme.palette.text.secondary,
      padding: "21px 49px",
    },
    controls: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: `0 20px`,
      margin: 0,
      listStyle: "none",
    },
    divider: {
      backgroundColor: theme.palette.secondary.main,
      marginRight: 20,
    },
    userProfile: {
      display: "flex",
      alignItems: "center",
    },
    avatar: {
      marginRight: 20,
    },
    notificationButton: {
      marginRight: -2,
      padding: 2,
      fontSize: 36,
    },
  })
);

function Header(props) {
  const classes = useStyles(props);
  return (
    <header className={classes.root}>
      <ul className={classes.controls}>
        <li>
          <IconButton color="secondary" className={classes.notificationButton}>
            <NotificationsNoneIcon fontSize="inherit" />
          </IconButton>
        </li>
      </ul>
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <div className={classes.userProfile}>
        <Avatar className={classes.avatar} src="/images/avatar-fallback.png" />
        <Link href="/profile">
          <Typography color="inherit" variant="body1">
            Иванова А.
          </Typography>
        </Link>
      </div>
    </header>
  );
}

export default Header;
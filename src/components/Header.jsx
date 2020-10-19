import {
  createStyles,
  Divider,
  Hidden,
  IconButton,
  makeStyles,
  Typography
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Link from "next/link";
import React from "react";
import UserAvatar from "./UserAvatar";

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
      backgroundColor: "currentColor",
      marginRight: 20,
    },
    userProfile: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
    },
    userName: {
      marginLeft: 20,
    },
    notificationButton: {
      marginRight: -2,
      padding: 2,
      fontSize: "2.25rem",
    },
    [theme.breakpoints.down('sm')]: {
      root: {
        padding: `17px 10px`
      },
      notificationButton: {
        fontSize: '1.5rem'
      },
      divider: {
        marginRight: 10,
      },
      controls: {
        padding: `0 10px`
      }
    }
  })
);

function Header({ name, ...props }) {
  const classes = useStyles(props);
  return (
    <header className={classes.root}>
      <ul className={classes.controls}>
        <li>
          <IconButton color="inherit" className={classes.notificationButton}>
            <NotificationsNoneIcon fontSize="inherit" />
          </IconButton>
        </li>
      </ul>
      <Divider orientation="vertical" flexItem className={classes.divider} />

      <Link passHref href="/profile">
        <a className={classes.userProfile}>
          <UserAvatar />
          <Hidden implementation="css" smDown>
            <Typography
              className={classes.userName}
              component="span"
              color="textSecondary"
              variant="body2"
            >
              {name}
            </Typography>
          </Hidden>
        </a>
      </Link>

    </header>
  );
}

export default Header;

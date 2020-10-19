import { createStyles, Divider, makeStyles } from "@material-ui/core";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import CallIcon from "@material-ui/icons/Call";
import React from "react";
import ProfileInfoItem from "./ProfileInfoItem";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    divider: {
      backgroundColor: "#CAE7FE",
    },
  })
);

export default function ProfileInfo({ profile, ...props }) {
  const classes = useStyles(props);
  
  return (
    <ul className={classes.root}>
      <li>
        <ProfileInfoItem
          icon={<AlternateEmailIcon fontSize="inherit" />}
          text={profile?.email ?? "Укажите email"}
        />
      </li>
      <Divider className={classes.divider} component="li" />
      <li>
        <ProfileInfoItem
          icon={<CallIcon fontSize="inherit" />}
          text={profile?.phone ?? "Укажите номер телефона"}
        />
      </li>
    </ul>
  );
}

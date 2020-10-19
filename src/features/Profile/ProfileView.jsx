import {
  Button,
  createStyles,
  Link,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import NextLink from "next/link";
import React, { useCallback, useState } from "react";
import UserAvatar from "../../components/UserAvatar";
import useProfileInfo from "./hooks/useProfileInfo";
import ProfileForm from "./ProfileForm";
import ProfileInfo from "./ProfileInfo";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "17px 23px 10px 34px",
    },
    headline: {
      color: theme.palette.text.secondary,
    },
    title: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.5625",
      textTransform: "uppercase",
    },
    breadcrumbs: {
      marginTop: 10,
    },
    profileBar: {
      marginTop: 32,

      display: "flex",
      alignItems: "center",
      padding: "24px 28px 24px 30px",

      color: theme.palette.secondary.contrastText,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.secondary.main,
    },
    avatar: {
      marginRight: 42,
    },
    userName: {
      fontSize: 30,
      fontWeight: 600,
    },
    formActionButton: {
      marginLeft: "auto",
    },
    formActionButtonText: {
      fontWeight: 600,
    },
    paper: {
      marginTop: 24,
    },
  })
);


export default function ProfileView(props) {
  const classes = useStyles(props);
  const [showEditForm, setShowEditForm] = useState(false);

  const toggleShowEditForm = useCallback(() => {
    setShowEditForm(!showEditForm);
  }, [showEditForm]);

  const profile = useProfileInfo();

  return (
    <main className={classes.root}>
      <div className={classes.headline}>
        <Typography compoent="h1" variant="h6" className={classes.title}>
          Личный Профиль
        </Typography>
        <nav className={classes.breadcrumbs}>
          <NextLink href="/" passHref>
            <Link component="a" color="textSecondary">
              Главная
            </Link>
          </NextLink>
          /
          <NextLink href="/profile" passHref>
            <Link component="a" color="textSecondary">
              Личный профиль
            </Link>
          </NextLink>
        </nav>
        <Paper className={classes.profileBar}>
          <UserAvatar className={classes.avatar} size="lg" />
          <Typography component="h2" className={classes.userName}>
            {profile.name}
          </Typography>
          <Button
            className={classes.formActionButton}
            color="inherit"
            endIcon={showEditForm ? <CloseIcon /> : <EditIcon />}
            classes={{ text: classes.formActionButtonText }}
            onClick={toggleShowEditForm}
          >
            {showEditForm ? "Закрыть" : "Редактировать"}
          </Button>
        </Paper>
      </div>
      <Paper className={classes.paper}>
        {!showEditForm ? <ProfileInfo profile={profile} /> : <ProfileForm initialValues={profile} />}
      </Paper>
    </main>
  );
}

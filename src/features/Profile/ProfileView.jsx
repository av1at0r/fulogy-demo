import {
  Button,
  createStyles,
  Hidden,
  IconButton,
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

    formActionButtonWrapper: {
      marginLeft: "auto",
    },
    formActionButtonText: {
      fontWeight: 600,
    },
    paper: {
      marginTop: 24,
    },
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: "1px 10px 10px 10px",
      },
      profileBar: {
        marginTop: 10,
        padding: "15px 10px",
      },
      avatar: {
        marginRight: 10,
      },

      formActionButton: {
        fontSize: 24,
        padding: 8,
      },
      paper: {
        marginTop: 10,
      },
    },
  })
);

export default function ProfileView(props) {
  const classes = useStyles(props);
  const [showEditForm, setShowEditForm] = useState(false);

  const toggleShowEditForm = useCallback(() => {
    setShowEditForm(!showEditForm);
  }, [showEditForm]);

  const handleCloseEditForm = useCallback(() => {
    setShowEditForm(false);
  }, [showEditForm]);

  const { info } = useProfileInfo();

  return (
    <main className={classes.root}>
      <div className={classes.headline}>
        <Typography compoent="h1" variant="subtitle2" className={classes.title}>
          Личный Профиль
        </Typography>
        <nav className={classes.breadcrumbs}>
          <NextLink href="/" passHref>
            <Link variant="body2" component="a" color="textSecondary">
              Главная
            </Link>
          </NextLink>
          /
          <NextLink href="/profile" passHref>
            <Link variant="body2" component="a" color="textSecondary">
              Личный профиль
            </Link>
          </NextLink>
        </nav>
        <Paper className={classes.profileBar}>
          <UserAvatar className={classes.avatar} size="lg" />
          <Typography component="h2" variant="h5">
            {info?.name || "Укажите ваше имя"}
          </Typography>
          <Hidden
            implementation="css"
            smDown
            className={classes.formActionButtonWrapper}
          >
            <Button
              className={classes.formActionButton}
              color="inherit"
              endIcon={showEditForm ? <CloseIcon /> : <EditIcon />}
              classes={{ text: classes.formActionButtonText }}
              onClick={toggleShowEditForm}
            >
              {showEditForm ? "Закрыть" : "Редактировать"}
            </Button>
          </Hidden>
          <Hidden
            implementation="css"
            mdUp
            className={classes.formActionButtonWrapper}
          >
            <IconButton
              className={classes.formActionButton}
              color="inherit"
              onClick={toggleShowEditForm}
            >
              {showEditForm ? <CloseIcon /> : <EditIcon />}
            </IconButton>
          </Hidden>
        </Paper>
      </div>
      <Paper className={classes.paper}>
        {!showEditForm ? (
          <ProfileInfo profile={info} />
        ) : (
          <ProfileForm initialValues={info} onClose={handleCloseEditForm} />
        )}
      </Paper>
    </main>
  );
}

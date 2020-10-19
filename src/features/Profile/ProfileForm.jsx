import {
  createMuiTheme,
  createStyles,
  makeStyles,
  ThemeProvider
} from "@material-ui/core";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import CallIcon from "@material-ui/icons/Call";
import React, { useCallback, useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import AlertDialog from "../../components/AlertDialog";
import ConfirmationDialog from "../../components/ConfirmationDialog";
import CustomButton from "../../components/CustomButton";
import TextFieldFinalForm from "../../components/TextFieldFinalForm";
import useUpdateProfile from "./hooks/useUpdateProfile";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: "26px 70px 44px 34px",
    },
    fields: {
      display: "flex",
      marginLeft: -32,
      marginRight: -77,
    },
    fieldWrapper: {
      display: "flex",
      alignItems: "center",
      minHeight: 97,
      minWidth: "33.33%",
      paddingRight: 77,
      paddingLeft: 32,
      "& + &": {
        borderLeft: `1px solid #CAE7FE`,
      },
    },

    icon: {
      flexShrink: 0,
      marginRight: 46,
      fontSize: 36,
      color: theme.palette.primary.main,
    },

    save: {
      alignSelf: "center",
      marginTop: 29,
    },
  })
);

const formTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#359FF4",
    },
    secondary: {
      main: "rgba(49, 49, 49, 0.5)",
    },
    text: {
      secondary: "rgba(49, 49, 49, 0.4)",
    },
  },
});

export default function ProfileForm({ initialValues, ...props }) {
  const classes = useStyles(props);

  const [showSavedDialog, setShowSavedDialog] = useState(false);
  const handleHideSavedDialog = useCallback(() => {
    setShowSavedDialog(false);
  }, []);

  const [showSaveDialog, setShowSaveDialog] = useState(false);

  const handleShowSaveDialog = useCallback(() => {
    setShowSaveDialog(true);
  }, []);
  const handleHideSaveDialog = useCallback(() => {
    setShowSaveDialog(false);
  }, []);
  const { updateProfile, success } = useUpdateProfile();

  const handleSubmit = useCallback(
    (e) => {
      console.log(e);
      e.preventDefault();
      handleShowSaveDialog();
    },
    [handleShowSaveDialog]
  );

  useEffect(() => {
    if (success) {
      setShowSaveDialog(false);
      setShowSavedDialog(true);
    }
  }, [success]);

  return (
    <Form onSubmit={updateProfile} initialValues={initialValues}>
      {({ form }) => (
        <form className={classes.root} onSubmit={() => {console.log('submit')}}>
          <div className={classes.fields}>
            <ThemeProvider theme={formTheme}>
              <div className={classes.fieldWrapper}>
                <AssignmentIndIcon className={classes.icon} />
                <Field
                  fullWidth
                  label="Фамилия и имя"
                  placeholder="Укажите ваши фамилию и имя"
                  variant="outlined"
                  name="name"
                  component={TextFieldFinalForm}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.fieldWrapper}>
                <AlternateEmailIcon className={classes.icon} />
                <Field
                  fullWidth
                  label="E-mail"
                  placeholder="Укажите ваш e-mail"
                  variant="outlined"
                  name="email"
                  component={TextFieldFinalForm}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={classes.fieldWrapper}>
                <CallIcon className={classes.icon} />
                <Field
                  fullWidth
                  label="Номер телефона"
                  placeholder="Укажите ваш номер телефона"
                  variant="outlined"
                  name="phone"
                  component={TextFieldFinalForm}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </ThemeProvider>
          </div>
          <CustomButton
            className={classes.save}
            color="primary"
            variant="contained"
            type="button"
            onClick={handleShowSaveDialog}
          >
            Сохранить изменения
          </CustomButton>
          <ConfirmationDialog
            title="Сохранить изменения?"
            confirmButtonText="Сохранить"
            cancelButtonText="Не сохранять"
            open={showSaveDialog}
            onClose={handleHideSaveDialog}
            onConfirm={handleSubmit}
          />
          <AlertDialog
            title="Данные успешно сохранены"
            closeButtonText="Хорошо"
            open={showSavedDialog}
            onClose={handleHideSavedDialog}
          />
        </form>
      )}
    </Form>
  );
}

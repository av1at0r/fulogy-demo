import {
  Button,
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
import { createEmailValidator, createNameValidator, createNameSymbolsValidator, createPhoneValidator } from "../../form-utils/validators";
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
      minHeight: 97,
      minWidth: "33.33%",
      paddingRight: 77,
      paddingLeft: 32,
      paddingTop: 23,
      "& + &": {
        borderLeft: `1px solid #CAE7FE`,
      },
    },

    icon: {
      marginTop: 11,
      flexShrink: 0,
      marginRight: 46,
      fontSize: 36,
      color: theme.palette.primary.main,
    },

    save: {
      alignSelf: "center",
      marginTop: 29,
    },

    submit: {
      display: 'none',
    }
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

const nameValidator = createNameValidator("Вы неверно указали имя")
const emailValidator = createEmailValidator("Вы неверно указали e-mail")
const phoneValidator = createPhoneValidator("Вы неверно указали номер телефона")

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

  useEffect(() => {
    if (success) {
      setShowSaveDialog(false);
      setShowSavedDialog(true);
    }
  }, [success]);

  return (
    <Form onSubmit={handleShowSaveDialog} initialValues={initialValues}>
      {({ form, handleSubmit, values }) => (
        <form className={classes.root} onSubmit={handleSubmit}>
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
                  validate={nameValidator}
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
                  validate={emailValidator}
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
                  validate={phoneValidator}
                />
              </div>
            </ThemeProvider>
          </div>
          <CustomButton
            className={classes.save}
            color="primary"
            variant="contained"
            type="submit"
          >
            Сохранить изменения
          </CustomButton>
          <ConfirmationDialog
            title="Сохранить изменения?"
            confirmButtonText="Сохранить"
            cancelButtonText="Не сохранять"
            open={showSaveDialog}
            onClose={handleHideSaveDialog}
            onConfirm={() => updateProfile(values)}
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

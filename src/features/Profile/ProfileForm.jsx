import {
  createMuiTheme,
  createStyles,
  Hidden,
  makeStyles,
  ThemeProvider,
  useTheme
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
import {
  createEmailValidator,
  createNameValidator,
  createPhoneValidator
} from "../../form-utils/validators";
import useDialog from "../../hooks/useDialog";
import theme, { defaultTheme } from "../../styles/theme";
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

    input: {
      height: theme.typography.pxToRem(19),
      lineHeight: theme.typography.pxToRem(19),
    },

    save: {
      alignSelf: "center",
      marginTop: 29,
    },

    submit: {
      display: "none",
    },

    [theme.breakpoints.down("md")]: {
      root: {
        padding: "17px 23px",
      },
      fieldWrapper: {
        paddingRight: 32,
      },
      fields: {
        marginRight: -32,
      },
    },

    [theme.breakpoints.down("sm")]: {
      root: {
        padding: "17px 23px",
      },
      fields: {
        margin: 0,
        flexDirection: "column",
      },
      fieldWrapper: {
        minHeight: 0,
        padding: 0,
        "& + &": {
          marginTop: 39,
          border: 0,
        },
      },
    },
  })
);

const formTheme = createMuiTheme({
  ...theme,
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
  shape: {
    borderRadius: defaultTheme.shape.borderRadius,
  },
});

const nameValidator = createNameValidator("Вы неверно указали имя");
const emailValidator = createEmailValidator("Вы неверно указали e-mail");
const phoneValidator = createPhoneValidator(
  "Вы неверно указали номер телефона"
);

export default function ProfileForm({
  initialValues,
  handleSubmit,
  onClose,
  ...props
}) {
  //Включаем анимацию исчезновения диалога, если
  //он был закрыт кнопкой, а не после успешного сохранения
  const [
    enableConfirmationTransition,
    setEnableConfirmationTransition,
  ] = useState(false);

  const confirmationDialog = useDialog();

  const handleConfirmationClose = useCallback(() => {
    setEnableConfirmationTransition(true);
    confirmationDialog.closeDialog();
  }, [confirmationDialog.closeDialog]);

  const handleConfirmationClosed = useCallback(() => {
    setEnableConfirmationTransition(false);
  }, []);

  const classes = useStyles(props);
  const theme = useTheme();

  const alertDialog = useDialog();

  const { updateProfile, success, loading } = useUpdateProfile();

  useEffect(() => {
    if (success) {
      confirmationDialog.closeDialog();
      alertDialog.openDialog();
    }
  }, [confirmationDialog.closeDialog, alertDialog.openDialog, success]);

  const handleCloseAlertDialog = useCallback(() => {
    alertDialog.closeDialog();
    onClose();
  }, [onClose, alertDialog.closeDialog]);

  return (
    <Form
      onSubmit={confirmationDialog.openDialog}
      initialValues={initialValues}
    >
      {({ handleSubmit, values }) => (
        <form className={classes.root} onSubmit={handleSubmit}>
          <div className={classes.fields}>
            <ThemeProvider theme={formTheme}>
              <div className={classes.fieldWrapper}>
                <Hidden implementation="css" mdDown>
                  <AssignmentIndIcon className={classes.icon} />
                </Hidden>
                <Field
                  fullWidth
                  label="Фамилия и имя"
                  placeholder="Укажите ваши фамилию и имя"
                  variant="outlined"
                  name="name"
                  component={TextFieldFinalForm}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ classes: { input: classes.input } }}
                  validate={nameValidator}
                />
              </div>
              <div className={classes.fieldWrapper}>
                <Hidden implementation="css" mdDown>
                  <AlternateEmailIcon className={classes.icon} />
                </Hidden>
                <Field
                  fullWidth
                  label="E-mail"
                  placeholder="Укажите ваш e-mail"
                  variant="outlined"
                  name="email"
                  component={TextFieldFinalForm}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ classes: { input: classes.input } }}
                  validate={emailValidator}
                />
              </div>
              <div className={classes.fieldWrapper}>
                <Hidden implementation="css" mdDown>
                  <CallIcon className={classes.icon} />
                </Hidden>
                <Field
                  fullWidth
                  label="Номер телефона"
                  placeholder="Укажите ваш номер телефона"
                  variant="outlined"
                  name="phone"
                  component={TextFieldFinalForm}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ classes: { input: classes.input } }}
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
            open={confirmationDialog.open}
            onClose={handleConfirmationClose}
            onExited={handleConfirmationClosed}
            onConfirm={() => updateProfile(values)}
            submitting={loading}
            transitionDuration={{
              enter: theme.transitions.duration.enteringScreen,
              exit: enableConfirmationTransition
                ? theme.transitions.duration.leavingScreen
                : 0,
            }}
          />
          <AlertDialog
            transitionDuration={{
              enter: 0,
              exit: theme.transitions.duration.leavingScreen,
            }}
            title="Данные успешно сохранены"
            closeButtonText="Хорошо"
            open={alertDialog.open}
            onClose={handleCloseAlertDialog}
          />
        </form>
      )}
    </Form>
  );
}

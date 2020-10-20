import {
  createStyles,
  Dialog,
  makeStyles,
  Slide,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const MobileTransition = React.forwardRef(function MobileTransition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      paper: {
        margin: 0,
        marginTop: "auto",
        maxWidth: "none",
        width: "100%",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  })
);

export default function CustomDialog({ TransitionComponent, ...props }) {
  const theme = useTheme();
  const classes = useStyles(props);
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const Transition = TransitionComponent
    ? TransitionComponent
    : sm
    ? MobileTransition
    : undefined;
  return (
    <Dialog TransitionComponent={Transition} {...props} classes={classes} />
  );
}

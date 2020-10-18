import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";

const bgShape = `%3Csvg width='1365' height='470' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-116 0h1481v470C998.988-38.4972 251.553 634.454-116 401.971V0z' fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='1365' y1='235.001' x2='-131.676' y2='235.001' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%232196F3'/%3E%3Cstop offset='1' stop-color='%231EC3AF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E`;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      backgroundImage: `url("data:image/svg+xml,${bgShape}")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      backgroundSize: "contain",
      backgroundColor: theme.palette.background.default,
    },
  })
);

const BaseLayout = ({ children, ...props }) => {
  const classes = useStyles(props);
  return <div className={classes.root}>{children}</div>;
};

export default BaseLayout;

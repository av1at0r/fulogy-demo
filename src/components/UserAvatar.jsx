import { Avatar, createStyles, makeStyles } from "@material-ui/core";
import cn from "classnames";
import React, { useMemo } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    lg: {
      width: 80,
      height: 80,
    },
    [theme.breakpoints.down('sm')]: {
      root: {
        width: 24,
        height: 24,
      },
      lg: {
        width: 40,
        height: 40,
      }
    }
  })
);

export default function UserAvatar({ src, size, ...props }) {
  const styles = useStyles(props);

  const classes = useMemo(() => {
    return {
      root: cn(props?.classes?.root, styles.root, {
        [styles.lg]: size === "lg",
      }),
    };
  }, [props?.classes, size]);

  return (
    <Avatar
      {...props}
      classes={classes}
      src={src || "/images/avatar-fallback.png"}
    />
  );
}

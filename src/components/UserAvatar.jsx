import { Avatar, createStyles, makeStyles } from "@material-ui/core";
import cn from "classnames";
import React, { useMemo } from "react";

const useStyles = makeStyles(() =>
  createStyles({
    lg: {
      width: 80,
      height: 80,
    },
  })
);

export default function UserAvatar({ src, size, ...props }) {
  const styles = useStyles();

  const classes = useMemo(() => {
    return {
      ...props?.classes,
      root: cn(props?.classes?.root, {
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

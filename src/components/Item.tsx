import { Grid, makeStyles } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import clsx from "clsx";
import React from "react";
import CustomizedDialogs from "./Dialog";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 60,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 8,
    padding: 8,
  },
  checked: {
    border: "1px solid #4CA07A",
    backgroundColor: "#FFFFFF",
  },
  cross: {
    border: "1px solid #DDDDDD",
    backgroundColor: "#FDFDFD",
  },
});
const currentTime = new Date(Date.now());
const today = new Date(
  currentTime.getFullYear(),
  currentTime.getMonth(),
  currentTime.getDate(),
  23,
  59,
  59
);
export function Item(props: { item: any }) {
  const { item } = props;
  const classes = useStyles();

  const checked = new Date(item.finish_date.toString()) <= today;
  const [open, setOpen] = React.useState(false);

  return (
    <Grid
      container
      className={clsx({
        [classes.root]: true,
        [classes.checked]: checked,
        [classes.cross]: !checked,
      })}
      alignItems="center"
      justifyContent="space-between"
      onClick={() => setOpen(true)}
    >
      <span>{item.name}</span>
      {checked ? (
        <CheckIcon style={{ color: "#2CD889" }} />
      ) : (
        <ClearIcon style={{ color: "#FC5A75" }} />
      )}
      {open && (
        <CustomizedDialogs
          item={item}
          open={open}
          handleClose={() => setOpen(false)}
        />
      )}
    </Grid>
  );
}

import DateFnsUtils from "@date-io/date-fns";
import { Box, Button, Grid, TextField } from "@material-ui/core";
import moment from "moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { cache, getToken } from "./api";
import { useNavigate } from "react-router-dom";
import { Header } from "./components/Header";

const useStyles = makeStyles({
  root: {
    height: "80vh",
    backgroundColor: "#F0FAF8",
  },
  grid: {
    height: "100%",
  },
  username: {
    width: 250,
  },
  button: {
    width: 250,
    background: "#2CD889",
  },
});

export function Page1() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = React.useState<string>("");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const [textError, setTextError] = React.useState(false);
  const [apiError, setApiError] = React.useState(false);
  const [dateError, setDateError] = React.useState(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleGetToken = async () => {
    try {
      if (!!username && !!selectedDate) {
        if (username.length >= 2 && username.length <= 20) {
          setTextError(false);
          setTextError(false);
          setApiError(false);
          await getToken(username, moment(selectedDate).format("yyyy-MM-DD"));
          if (!!cache.token) {
            navigate("/page2");
          }
        } else {
          setTextError(true);
        }
      } else {
        setTextError(true);
        setDateError(true);
      }
    } catch (err) {
      setApiError(true);
    }
  };

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          className={classes.grid}
        >
          <Grid item>W</Grid>
          <Grid item>
            <TextField
              error={textError}
              helperText={
                textError && "Username must be 2-20 characters in length."
              }
              label="Username"
              className={classes.username}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>

          <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                error={apiError || dateError}
                helperText={
                  apiError
                    ? "Please input correct details"
                    : dateError
                    ? "Please choose a date"
                    : null
                }
                className={classes.username}
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-inline"
                label="Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{}}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item>
            <Button onClick={handleGetToken} className={classes.button}>
              Get Token
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

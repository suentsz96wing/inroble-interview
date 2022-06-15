import { Grid, makeStyles, Typography } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import { cache } from "../api";

const useStyles = makeStyles({
  root: {
    height: "10vh",
  },
  grid: {
    height: "100%",
  },
  icon: { color: "#4CA07A" },
  font: {
    fontSize: 18,
    color: "#4CA07A",
  },
});
export function Header() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.grid}
      >
        <Grid item container xs={6}>
          <Grid item style={{ marginRight: "10px" }}>
            W
          </Grid>
          {location.pathname === "/" && (
            <Grid item>WELCOME TO WEMI ROUND 2</Grid>
          )}
          {location.pathname === "/page2" && (
            <Grid item>{localStorage.getItem("username") || ""}</Grid>
          )}
        </Grid>

        <Grid item xs={6}>
          {location.pathname === "/page2" && (
            <Typography>{localStorage.getItem("date") || ""}</Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

import { Grid, makeStyles, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import GitHubIcon from "@material-ui/icons/GitHub";
const useStyles = makeStyles({
  root: {
    height: "10vh",
  },
  grid: {
    height: "100%",
  },
  icon: { color: "#4CA07A", marginRight: 8 },
  font: {
    fontSize: 18,
    color: "#4CA07A",
  },
});
export function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        className={classes.grid}
      >
        <Grid item xs={3} container alignItems="center" justifyContent="center">
          <EmailIcon className={classes.icon} />
          <a href="mailto:suentsz96wing@gmail.com">suentsz96wing@gmail.com</a>
        </Grid>

        <Grid item xs={3} container alignItems="center" justifyContent="center">
          <PhoneIcon className={classes.icon} />
          <span className={classes.font}>416-832-5775</span>
        </Grid>
        <Grid item xs={3} container alignItems="center" justifyContent="center">
          <GitHubIcon className={classes.icon} />
          <a
            href="https://github.com/suentsz96wing/inroble-interview"
            className={classes.font}
          >
            Github
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

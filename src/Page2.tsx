import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { cache, getProducts } from "./api";
import { Header } from "./components/Header";
import { Item } from "./components/Item";

const useStyles = makeStyles({
  root: {
    height: "80vh",
    backgroundColor: "#F0FAF8",
    overflow: "scroll",
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
  text: {
    height: 50,
    marginBottom: 5,
    width: "100%",
    fontSize: 28,
    textDecoration: "underline",
    color: "#2CD889",
  },
});
export function Page2() {
  const classes = useStyles();
  const [datas, setDatas] = React.useState<any>(null);
  React.useEffect(() => {
    getProducts().then((result) => {
      setDatas(result);
    });
  }, []);
  return (
    <>
      <Header />
      <div className={classes.root}>
        <Grid container justifyContent="space-around">
          <Grid item xs={3} container>
            <Typography align="center" className={classes.text}>
              Health Care
            </Typography>
            {datas &&
              datas.healthCares &&
              datas.healthCares.length > 0 &&
              datas.healthCares.map((item: any) => (
                <Item key={item.id} item={item} />
              ))}
          </Grid>
          <Grid item xs={3} container>
            <Typography align="center" className={classes.text}>
              Finance
            </Typography>
            {datas &&
              datas.finances &&
              datas.finances.length > 0 &&
              datas.finances.map((item: any) => (
                <Item key={item.id} item={item} />
              ))}
          </Grid>
          <Grid item xs={3} container>
            <Typography align="center" className={classes.text}>
              Technology
            </Typography>
            {datas &&
              datas.technologies &&
              datas.technologies.length > 0 &&
              datas.technologies.map((item: any) => (
                <Item key={item.id} item={item} />
              ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

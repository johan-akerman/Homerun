import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from "./NavBar.module.css";
import homeIcon from "../../images/homeIcon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={styles.navbar}>
          <img src={homeIcon} className={styles.logo} />
          <Typography variant="h6" className={classes.title}>
              Homerun
          </Typography>
          <Button href="https://github.com/johan-akerman/Homerun" target="_blank" color="inherit">View code on Github</Button>
          <Button href="https://forms.gle/ML7Vnwuq2xRw7Q2DA" target="_blank" color="inherit">Feedback</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

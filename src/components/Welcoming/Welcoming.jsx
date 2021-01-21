import React from 'react';
import styles from "./Welcoming.module.css";
import illustration from "../../houseIllustration.svg";
import Typography from '@material-ui/core/Typography';

export default function Welcoming(props) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.content}>
                <img className={styles.image} src={illustration} />
                <Typography variant="h3" component="h5" gutterBottom>Welcome to Homerun! </Typography>
                <Typography variant="body1">Homerun lets you make a "homerun" on your next apartment purchase by helping you compare apartments sold in Stockholm during 2020. Get started by adding a search filter by clicking on the button in the right bottom corner. You can add multiple filters by clicking on the buttom multiple times!</Typography>
            </div>
        </div>
    )
}
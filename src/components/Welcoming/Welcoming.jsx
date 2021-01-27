import React from 'react';
import styles from "./Welcoming.module.css";
import illustration from "../../images/houseIllustration.svg";
import Typography from '@material-ui/core/Typography';

export default function Welcoming(props) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.content}>
                <img className={styles.image} src={illustration} />
                <Typography variant="h3" component="h5" gutterBottom>Welcome to Homerun! </Typography>
                <Typography variant="body1">Homerun lets you make a "homerun" on your next apartment purchase by helping you compare apartments sold in Stockholm during 2020. Click on the button in the bottom left corner to add filters for the different type of apartments that you are interested in! </Typography>
            </div>
        </div>
    )
}
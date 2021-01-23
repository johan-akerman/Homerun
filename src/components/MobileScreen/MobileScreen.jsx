import React from 'react';
import styles from "./MobileScreen.module.css";
import illustration from "../../images/phoneIllustration.svg";
import Typography from '@material-ui/core/Typography';

export default function Welcoming(props) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.content}>
                <img className={styles.image} src={illustration} />
                <Typography variant="h4" component="h4" gutterBottom>Oh oh, your screen is to small!</Typography>
                <Typography variant="body1">For best results, this tool is built for desktop devices. Please change to a desktop device to use this tool. If you already are on one, please expand your web browser to atleast than 1000px wide. </Typography>
            </div>
        </div>
    )
}
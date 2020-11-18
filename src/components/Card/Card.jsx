import React from 'react';
import styles from "./Card.module.css";
import Typography from '@material-ui/core/Typography';

export default function Grid(props) {
    let {title, children} = props;

    return (
        <div className={styles.gridContainer}>
            <div className={styles.gridHeader}>
                <Typography variant="subtitle1" component="h5">{title}</Typography>
            </div>
            <div className={styles.gridContent}>
                {children}
            </div>
      </div>
    )
}
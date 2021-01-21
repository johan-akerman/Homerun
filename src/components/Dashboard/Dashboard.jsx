import React from 'react';
import styles from "./Dashboard.module.css";
import Grid from "@material-ui/core/Grid";
import Card from "./Card/Card";
import Summary from "./Visualizations/Summary/Summary";
import BrokerMarketShare from "./Visualizations/BrokerMarketShare/BrokerMarketShare";
import BrokersAveragePriceDevelopment from "./Visualizations/BrokersAveragePriceDevelopment/BrokersAveragePriceDevelopment";
import SquareMeterPriceDevelopment from "./Visualizations/SquareMeterPriceDevelopment/SquareMeterPriceDevelopment";
import NumberOfSales from "./Visualizations/NumberOfSales/NumberOfSales";


export default function Dashboard(props) {
    let {data} = props;
    return (
        <div className={styles.mainContainer}>
            <Grid container spacing={1} className={styles.gridContainer}>
                <Grid item xs={12}>
                    <Card
                    title="Summary"
                    description="Description about this card goes here."
                    >
                    <Summary data={data} />
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card
                    title="Number of sales"
                    description="Description about this card goes here."
                    >
                    <NumberOfSales data={data} />
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card
                    title="Squaremeter price development"
                    description="Description about this card goes here."
                    >
                    <SquareMeterPriceDevelopment data={data} />
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card
                    title="Broker market share"
                    description="Description about this card goes here."
                    >
                    <BrokerMarketShare data={data} />
                    </Card>
                </Grid>

                <Grid item xs={8}>
                    <Card
                    title="Brokers average price development in %"
                    description="Description about this card goes here."
                    >
                    <BrokersAveragePriceDevelopment data={data} />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
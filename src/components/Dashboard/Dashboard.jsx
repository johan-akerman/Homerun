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
                    description="Shows a summary of all of the average data from all of the apartments in each filter. "
                    >
                    <Summary data={data} />
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card
                    title="Number of sales"
                    description="Shows the total amount of sales each month for each filter."
                    >
                    <NumberOfSales data={data} />
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card
                    title="Squaremeter price development"
                    description="Shows how the average price / sqm has changed during the year for each filter."
                    >
                    <SquareMeterPriceDevelopment data={data} />
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card
                    title="Broker market share"
                    description="The chart shows how many sales each broker had in the last year."
                    >
                    <BrokerMarketShare data={data} />
                    </Card>
                </Grid>

                <Grid item xs={8}>
                    <Card
                    title="Brokers average price development in %"
                    description="Shows the average (endprice - askprice) / askprice for each broker. I.e how the end price differs from the askprice in %."
                    >
                    <BrokersAveragePriceDevelopment data={data} />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
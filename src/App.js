import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NavBar from "./components/NavBar/NavBar";
import FilterList from "./components/FilterList/FilterList";
import Popup from "./components/Popup/Popup";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import Summary from "./components/Visualizations/Summary/Summary";
import AverageMonthlyFee from "./components/Visualizations/AverageMonthlyFee/AverageMonthlyFee";
import BrokerMarketShare from "./components/Visualizations/BrokerMarketShare/BrokerMarketShare";
import BrokersAveragePriceDevelopment from "./components/Visualizations/BrokersAveragePriceDevelopment/BrokersAveragePriceDevelopment";
import SquareMeterPriceDevelopment from "./components/Visualizations/SquareMeterPriceDevelopment/SquareMeterPriceDevelopment";
import NumberOfSales from "./components/Visualizations/NumberOfSales/NumberOfSales";

const url = "/apartments.json";
const App = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [filters, setFilters] = useState([]);
  const [allApartments, setAllApartments] = useState([]);
  const [filteredApartments, setFilteredApartments] = useState([]);

  //sets allApartments to all apartments from JSON file.
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setAllApartments(json);
      setFilteredApartments(json);
    };
    fetchData();
  }, []);

  //Opens popup on button click.
  const handleAdd = () => {
    if (filters.length > 4) {
      alert(
        "For best visualization results we have limited the amount of apartments to 5 at the time. Remove any of your previous filters if you want to add a new one."
      );
    } else {
      setOpenPopup(true);
    }
  };

  //Submits form.
  const handleFormSubmit = (data) => {
    const tmpFilters = [...filters];
    tmpFilters.push(data);
    setFilters(tmpFilters);
    setOpenPopup(false);
  };

  //Deletes filter
  const handleDelete = (i) => {
    const splicedFilters = [...filters];
    splicedFilters.splice(i, 1);
    setFilters(splicedFilters);
  };

  const NoAddedFilters = () => {
    if (filters.length < 1) {
      return (
        <>
          <Typography variant="h4" component="h4">
            Hey, looks like you havent added any areas yet!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Add areas to your search by clicking on the button below. Tip: you
            can add multiple areas to compare them.{" "}
          </Typography>
        </>
      );
    } else {
      return <FilterList filters={filters} handleDelete={handleDelete} />;
    }
  };

  useEffect(() => {
    const newFilteredApartments = [];
    filters.forEach((filter, index) => {
      const collection = []; //all apartments in a specific filter / search.
      allApartments.forEach((apartment) => {
        if (filter.area === apartment.area) {
          if (
            filter.rooms[0] <= apartment.rooms &&
            filter.rooms[1] >= apartment.rooms
          ) {
            if (
              filter.squareMeters[0] <= apartment.size &&
              filter.squareMeters[1] >= apartment.size
            ) {
              if (
                filter.price[0] * 1000000 <= apartment.askPrice &&
                filter.price[1] * 1000000 >= apartment.askPrice
              ) {
                if (filter.fee * 1000 >= apartment.monthlyFee) {
                  collection.push(apartment); // add apartment that fullfills all tests to the collection.
                }
              }
            }
          }
        }
      });

      if (collection.length > 0) {
        newFilteredApartments.push(collection);
      } else {
        alert(
          "No apartment like this has been sold. Try to broaden your search for better results!"
        );
        handleDelete(index);
        handleAdd();
      }
    });
    setFilteredApartments(newFilteredApartments);
  }, [allApartments, filters]);

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.sideBar}>
          <div className={styles.sideBarContent}>
            <NoAddedFilters />
            <div className={styles.buttonContainer}>
              <Typography variant="overline">
                Compare with other areas
              </Typography>
              <br></br>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => handleAdd()}
              >
                Add new area
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.mainContainer}>
          <div className={styles.mainContainerContent}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Card
                  title="Summary"
                  description="Description about this card goes here."
                >
                  <Summary data={filteredApartments} />
                </Card>
              </Grid>

              <Grid item xs={8}>
                <Card
                  title="Number of sales"
                  description="Description about this card goes here."
                >
                  <NumberOfSales data={filteredApartments} />
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card
                  title="Sold apartments map"
                  description="Description about this card goes here."
                ></Card>
              </Grid>

              <Grid item xs={8}>
                <Card
                  title="Squaremeter price development"
                  description="Description about this card goes here."
                >
                  <SquareMeterPriceDevelopment data={filteredApartments} />
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card
                  title="Average monthly fee"
                  description="Description about this card goes here."
                >
                  <AverageMonthlyFee data={filteredApartments} />
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card
                  title="Broker market share"
                  description="Description about this card goes here."
                >
                  <BrokerMarketShare data={filteredApartments} />
                </Card>
              </Grid>

              <Grid item xs={8}>
                <Card
                  title="Brokers average price development in %"
                  description="Description about this card goes here."
                >
                  <BrokersAveragePriceDevelopment data={filteredApartments} />
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      <Popup title={"Add area to search"} openPopup={openPopup}>
        <Form filters={filters} handleFormSubmit={handleFormSubmit} />
      </Popup>
    </>
  );
};

export default App;

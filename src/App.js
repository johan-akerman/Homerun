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
import Table from "./components/Table/Table";
import Map from "./components/Map/Map";
import DoughnutChart from "./components/DoughnutChart/DoughnutChart";
import BarChart from "./components/BarChart/BarChart";
import SquareMeterPriceDevelopment from "./components/Charts/SquareMeterPriceDevelopment/SquareMeterPriceDevelopment";

const url = "/apartments.json";
const App = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [filters, setFilters] = useState([]);
  const [allApartments, setAllApartments] = useState([]);
  const [filteredApartments, setFilteredApartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setAllApartments(json);
      setFilteredApartments(json);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const tmpAllApartments = [...allApartments];
    const newFilteredApartments = [];
    filters.forEach((filter) => {
      tmpAllApartments.forEach((apartment) => {
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
                  newFilteredApartments.push(apartment);
                }
              }
            }
          }
        }
      });
    });
    setFilteredApartments(newFilteredApartments);
  }, [allApartments, filters]);

  const handleFormSubmit = (data) => {
    const tmpFilters = [...filters];
    tmpFilters.push(data);
    setFilters(tmpFilters);
    setOpenPopup(false);
  };

  const handleAdd = () => setOpenPopup(true);

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

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.sideBar}>
          <div className={styles.sideBarContent}>
            <NoAddedFilters />
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => handleAdd()}
            >
              Add new area
            </Button>
          </div>
        </div>

        <div className={styles.mainContainer}>
          <div className={styles.mainContainerContent}>
            <Grid container spacing={1}>
              {/* <Grid item xs={12}>
                <Card title="Map with filtersets">
                  <Map />
                </Card>
              </Grid> */}

              <Grid item xs={8}>
                <Card title="Squaremeter price development">
                  <SquareMeterPriceDevelopment data={filteredApartments} />
                </Card>
              </Grid>

              {/* <Grid item xs={8}>
                        <Card title="OLD !!!! Squaremeter price development"> 
                            <LineChart data={this.state.apartments} filters={this.state.filters}/>
                        </Card>
                    </Grid> */}

              <Grid item xs={4}>
                <Card title="Bar Chart with average prisutveckling">
                  <BarChart />
                </Card>
              </Grid>

              <Grid item xs={8}>
                <Card title="Summary">
                  <Table />
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card title="Total sales">
                  <DoughnutChart />
                </Card>
              </Grid>

              <Grid item xs={8}>
                <Card title="Number of sales">
                  <h1>test</h1>
                </Card>
              </Grid>

              <Grid item xs={8}>
                <Card title="Average prisutveckling / mäklare">
                  <h1>test</h1>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card title="Bar Chart med average fee (last year)">
                  <BarChart />
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

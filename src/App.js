import React from "react";
import styles from "./App.module.css";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import NavBar from "./components/NavBar/NavBar"
import FilterList from "./components/FilterList/FilterList"
import Popup from "./components/Popup/Popup";
import Card from "./components/Card/Card";
import Grid from '@material-ui/core/Grid';
import Form from "./components/Form/Form";
import Typography from '@material-ui/core/Typography';
import Table from "./components/Table/Table"
import LineChart from "./components/LineChart/LineChart"
// import Map from "./components/Map/Map"
import DoughnutChart from "./components/DoughnutChart/DoughnutChart"
import BarChart from "./components/BarChart/BarChart"
import SquareMeterPriceDevelopment from "./components/Charts/SquareMeterPriceDevelopment/SquareMeterPriceDevelopment";
const url = "/apartments.json"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openPopup: false,
            setOpenPopup: false,
            filters: [],
            allApartments: [],
            filteredApartments: [],
        }
    }

    async componentDidMount() {
        const response = await fetch(url);
        const json = await response.json();
        this.setState({ allApartments: json });
    }

    generateDataFromFilters = () => {
        let tmpFilteredApartments = [];
        this.state.filters.forEach((x) => {
            let filteredByArea = this.state.allApartments.filter((item) => item.area == x.area);
            // const filteredByNoOfRooms = filteredByArea.filter((item) => item.rooms[0] >= x.rooms[0] && item.rooms[1] <= x.rooms[1]);
            // const filteredByPrice = filteredByNoOfRooms.filter((item) => item.price[0] >= x.price[0]);
            // const filteredByLivingarea = filteredByPrice.filter((item) => item.squareMeters[0] >= x.squareMeters[0] && item.squareMeters[1] <= x.squareMeters[1]);
            // const filteredByFee = filteredByLivingarea.filter((item) => item.fee[0] >= x.fee[0] && item.fee[1] <= x.fee[1]);
            tmpFilteredApartments.push(filteredByArea);
            console.log(tmpFilteredApartments)
        })

        this.setState({
            filteredApartments: tmpFilteredApartments,
        })
        console.log(this.state.filteredApartments)
    }

    noAddedFiltersYet = () => {
        if (this.state.filters.length < 1) {
            return (<>
                        <Typography variant="h4" component="h4">Hey, looks like you havent added any areas yet!</Typography>
                        <Typography variant="body1" gutterBottom>Add areas to your search by clicking on the button below. Tip: you can add multiple areas to compare them. </Typography>
                    </>
            )
        } else {
            return <FilterList filters = {this.state.filters} handleDelete = {this.handleDelete} />
        }
    }

    handleFormSubmit = (data) => {
        let filters = this.state.filters;
        filters.push(data);
        this.generateDataFromFilters();
        this.setState({openPopup: false})
    }

    handleAdd = () => {
        this.setState({openPopup: true})
    }

    handleDelete = (i) => {
        let filters = this.state.filters;
        filters.splice(i, 1);
        this.setState({filters: filters})
    }

    render() {

        return(<>
            <NavBar />
            <div className={styles.container}>
            <div className={styles.sideBar}>
                <div className={styles.sideBarContent}>
                {this.noAddedFiltersYet()}
                <Button variant="outlined" size="medium" color="primary" startIcon={<AddIcon />} onClick={this.handleAdd}>Add new area</Button>
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
                            <SquareMeterPriceDevelopment data={this.state.filteredApartments}/>
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
           
             <Popup title={"Add area to search"} openPopup={this.state.openPopup} setOpenPopup = {this.state.setOpenPopup}>
             <Form filters = {this.state.filters} handleFormSubmit = {this.handleFormSubmit}  />
            </Popup>
             </>   
        )
    }
}

export default App;
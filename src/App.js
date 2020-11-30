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

import DoughnutChart from "./components/DoughnutChart/DoughnutChart"
import BarChart from "./components/BarChart/BarChart"

class App extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            openPopup: false,
            setOpenPopup: false,
            datas: [
            ],
            apartments: [

            ],
        }
    }

    componentDidMount() {
        fetch('apartments.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      }).then(myJson => {
          this.setState({apartments: myJson})
          //console.log(this.state.apartments);
      });
    }

    noAddedFiltersYet = () => {
        if (this.state.datas.length < 1) {
            return (
            <>
                <br />
                <Typography variant="h4" component="h4">Hey, looks like you havent added any areas yet!</Typography>
                <Typography variant="body1" gutterBottom>Add areas to your search by clicking on the button below. Tip: you can add multiple areas to compare them. </Typography>
            </>
            )
        } else {
            return <FilterList datas = {this.state.datas} handleDelete = {this.handleDelete} />
        }
    }

    handleFormSubmit = (data) => {
        let datas = this.state.datas;
        datas.push(data);
        this.setState({openPopup: false})
    }

    handleAdd = () => {
        this.setState({openPopup: true})
    }

    handleDelete = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({datas: datas})
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
                    
                <Grid item xs={8}>
                        <Card title="Squaremeter price development"> 
                            <LineChart data={this.state.apartments}/>
                        </Card>
                    </Grid>

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
                   <h1>hej</h1>
                        </Card>
                    </Grid>
    
                    <Grid item xs={4}>
                    <Card title="Någonting"> 
                          
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
           
             <Popup title={"Add area to search yout search"} openPopup={this.state.openPopup} setOpenPopup = {this.state.setOpenPopup}>
             <Form datas = {this.state.datas} handleFormSubmit = {this.handleFormSubmit}  />
            </Popup>
             </>   
        )
    }
}

export default App;
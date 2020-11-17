import React from "react";
import styles from "./App.module.css";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import NavBar from "./components/NavBar/NavBar"
import FilterList from "./components/FilterList/FilterList"
import Popup from "./components/Popup/Popup";
import Form from "./components/Form/Form";
import Typography from '@material-ui/core/Typography';


class App extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            openPopup: false,
            setOpenPopup: false,
            datas: [
            ]
        }
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
            <div className={styles.sideBar}>
                {this.noAddedFiltersYet()}
                <Button variant="outlined" size="medium" color="primary" startIcon={<AddIcon />} onClick={this.handleAdd}>Add new area</Button>
            </div>
           
             <Popup title={"Add area to search yout search"} openPopup={this.state.openPopup} setOpenPopup = {this.state.setOpenPopup}>
             <Form datas = {this.state.datas} handleFormSubmit = {this.handleFormSubmit}  />
            </Popup>
             </>   
        )
    }
}

export default App;
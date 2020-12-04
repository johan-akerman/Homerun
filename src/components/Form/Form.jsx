import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import styles from "./Form.module.css"

const useStyles = makeStyles((theme) => ({
    formControl: {
      width: 300
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
        width: 300,
      },
  }));

const Form = (props) => {
    const classes = useStyles();
    const [area, setArea] = React.useState('');
    const [price, setPrice] = React.useState([20, 37]);
    const [rooms, setRoom] = React.useState([20, 37]);
    const [squareMeters, setSquareMeters] = React.useState([20, 37]);
    const [fee, setFee] = React.useState([20, 37]);

    var data = {
        area: area, price: price, rooms: rooms, squareMeters: squareMeters, fee: fee
    }

    const handleAreaChange = (event) => {
        setArea(event.target.value);
        data.area = event.target.value;
    };

    const handlePriceChange = (event, newValue) => {
        setPrice(newValue);
    };
 
    const handleRoomChange = (event, newValue) => {
      setRoom(newValue);
    };

    const handleSquareMetersChange = (event, newValue) => {
        setSquareMeters(newValue);
    };

    const handleFeeChange = (event, newValue) => {
        setFee(newValue);
    };


    let submitMe = (e) => {
      e.preventDefault();


      if (!data.area) {
        alert("You have to choose an area! ");
      } else {
        props.handleFormSubmit(data)
      }
    }

    return (<div>
        <FormControl required className={classes.formControl}>
        
            <Typography id="range-slider" gutterBottom>
        Area
      </Typography>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                value={area}
                onChange={handleAreaChange}
                >
                <MenuItem value={"Östermalm"}>Östermalm</MenuItem>
                <MenuItem value={"Södermalm"}>Södermalm</MenuItem>
                <MenuItem value={"Kungsholmen"}>Kungsholmen</MenuItem>
                </Select>
        </FormControl>

<br />
<br />
<div className={classes.root}>


           
<Typography id="range-slider" gutterBottom>
        Number of rooms
      </Typography>
    
      <Slider
        defaultValue={[1, 2]}
        step={0.5}
        min={1}
        max={15}
        onChange={handleRoomChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />

      <Typography id="range-slider" gutterBottom>
        Price (million SEK)
      </Typography>
    
      <Slider
        defaultValue={[0, 2]}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        
        step={0.25}
        min={0.5}
        max={13.5}
      />
 
<Typography id="range-slider" gutterBottom>
        Livingarea (squaremeters)
      </Typography>
    
      <Slider
        defaultValue={[20, 50]}
        onChange={handleSquareMetersChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        step={5}
        min={20}
        max={150}
  
      />

<Typography id="discrete-slider" gutterBottom>
        Highest fee (thousand SEK)
      </Typography>
      <Slider
        defaultValue={6}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.5}
        onChange={handleFeeChange}
        min={0}
        max={25}
      />
    </div>


       <br />
     

            <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={submitMe}
        className={styles.myBtn}
        startIcon={<AddIcon />}
      >
        Add to search
      </Button>
       </div>
    );
}
 
export default Form;
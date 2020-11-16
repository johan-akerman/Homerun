import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

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
    const [squareMeterPrice, setSquareMeterPrice] = React.useState([20, 37]);
    const [rooms, setRoom] = React.useState([20, 37]);
    const [squareMeters, setSquareMeters] = React.useState([20, 37]);
    const [fee, setFee] = React.useState([20, 37]);

    var data = {
        area: area, price: price, squareMeterPrice: squareMeterPrice, rooms: rooms, squareMeters: squareMeters, fee: fee
    }

    const handleAreaChange = (event) => {
        setArea(event.target.value);
        data.area = event.target.value;
        console.log(data)
    };

    const handlePriceChange = (event, newValue) => {
        setPrice(newValue);
    };

    const handleSquareMeterPriceChange = (event, newValue) => {
        setSquareMeterPrice(newValue);
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
        props.handleFormSubmit(data)
    }

    return (<div>
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Område</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
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
        Pris
      </Typography>
    
      <Slider
        value={price}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
  
      />

<Typography id="range-slider" gutterBottom>
        Kvadratmeterpris
      </Typography>
    
      <Slider
        value={squareMeterPrice}
        onChange={handleSquareMeterPriceChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
  
      />

<Typography id="range-slider" gutterBottom>
        Rum
      </Typography>
    
      <Slider
        value={rooms}
        onChange={handleRoomChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
  
      />

<Typography id="range-slider" gutterBottom>
        Boarea
      </Typography>
    
      <Slider
        value={squareMeters}
        onChange={handleSquareMetersChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
  
      />

<Typography id="range-slider" gutterBottom>
        Högst avgift
      </Typography>
    
      <Slider
        value={fee}
        onChange={handleFeeChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
  
      />
    </div>


       <br />
     

            <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={submitMe}
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Add to seach
      </Button>
       </div>
    );
}
 
export default Form;
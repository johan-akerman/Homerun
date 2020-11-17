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

//Gammal logik från tidigare form (sparas tillfälligt som inspiration till hur Edit ska kodas)
//    fSubmit = (e) => {
//        e.preventDefault();
//        let datas = this.state.datas;
//        let firstname = this.refs.firstname.value;
//        let lastname= this.refs.lastname.value;
//        let kvadratmeter = this.refs.kvadratmeter.value;
//        let rum= this.refs.rum.value;
 

//        if (this.state.act === 0) { //new
//         let data = {
//             firstname, lastname, kvadratmeter, rum
//         }
//         datas.push(data);


//        } else { //edit
//         let index = this.state.index;
//         datas[index].firstname = firstname;
//         datas[index].lastname = lastname;
//         datas[index].kvadratmeter = kvadratmeter;
//         datas[index].rum = rum;
//        }
     
//        this.setState({
//            datas: datas,
//            act: 0
//        });

//        this.refs.myForm.reset();
//        this.setState({openPopup: false})
//        console.log(this.state.datas)
//    }

//    fRemove = (i) => {
//     let datas = this.state.datas;
//     datas.splice(i,1);
//     this.setState({
//         datas: datas
//     })
//    }

//    fEdit = (i) => {

//     this.setState({
//         act: 1,
//         index: i,
//         openPopup: true
//     })

//     let data = this.state.datas[i];
//     this.refs.firstname.value = data.firstname;
//     this.refs.lastname.value = data.lastname;
//     this.refs.kvadratmeter.value = data.kvadratmeter;
//     this.refs.rum.value = data.rum;
//     this.refs.firstname.focus();

//    }
 

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
        console.log(data)
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
                required
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
        value={rooms}
       
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
        value={price}
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
        value={squareMeters}
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
        defaultValue={30}
       
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
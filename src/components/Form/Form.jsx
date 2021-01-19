import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import styles from './Form.module.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: 300,
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
  const [area, setArea] = React.useState('Östermalm');
  const [price, setPrice] = React.useState([0, 10]);
  const [rooms, setRoom] = React.useState([1, 5]);
  const [squareMeters, setSquareMeters] = React.useState([0, 100]);
  // const [fee, setFee] = React.useState(20);

  const handleAreaChange = (event) => {
    setArea(event.target.value);
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

  // const handleFeeChange = (event, newValue) => {
  //   setFee(newValue);
  // };

  let submitMe = (e) => {
    e.preventDefault();

    if (!area) {
      alert('You have to choose an area! ');
    } else {
      props.handleFormSubmit({
        area,
        price,
        rooms,
        squareMeters,
        // fee,
      });
    }
  };

  return (
    <div>
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
          <MenuItem value={'Östermalm'}>Östermalm</MenuItem>
          <MenuItem value={'Södermalm'}>Södermalm</MenuItem>
          <MenuItem value={'Kungsholmen'}>Kungsholmen</MenuItem>
          <MenuItem value={'Vasastan'}>Vasastan</MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />
      <div className={classes.root}>
        <Typography id="range-slider" gutterBottom>
          Number of rooms
        </Typography>

        <Slider
          className={styles.slider}
          value={rooms}
          step={0.5}
          min={1}
          max={10}
          onChange={handleRoomChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />

        <Typography id="range-slider" gutterBottom>
          Price (mSEK)
        </Typography>

        <Slider
          value={price}
          className={styles.slider}

          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          step={0.25}
          min={0.5}
          max={20}
        />

        <Typography id="range-slider" gutterBottom>
          Livingarea (sqm)
        </Typography>
    

        <Slider
          value={squareMeters}
          className={styles.slider}

          onChange={handleSquareMetersChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          step={5}
          min={15}
          max={150}
        />

        {/* <Typography id="discrete-slider" gutterBottom>
          Max monthly fee (thousand SEK)
        </Typography>
        <Slider
          value={fee}
          className={styles.slider}

          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={0.5}
          onChange={handleFeeChange}
          min={0}
          max={25}
        /> */}
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
};

export default Form;

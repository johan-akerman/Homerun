import React from "react";
import {Cards, Chart, CountryPicker, Table, NavBar, SideBar} from "./components";
import styles from "./App.module.css";
import {fetchData} from "./api"
import Grid from '@material-ui/core/Grid';
import cx from "classnames";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';



import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';


class App extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            act: 0,
            index: "", 
            datas: []
        }
    }


    // state = {
    //     data: {},
    //     country: "",
    // }

    // async componentDidMount() {
    //     const fetchedData = await fetchData();
    //     this.setState({data: fetchedData})
    // }

    // handleCountryChange = async(country) => {
    //     const fetchedData = await fetchData(country);
    //     this.setState({data: fetchedData, country: country})
    // }


   getColor = (i) => {
       if (i === 0) return "#8bc34a" ;
       else if (i === 1) return "#03a9f4";
       else if (i === 2) return "#ff9800";
       else if (i === 3) return "#9c27b0";
       else if (i === 4) return "#673ab7";
   }

   fSubmit = (e) => {
       e.preventDefault();
       let datas = this.state.datas;
       let firstname = this.refs.firstname.value;
       let lastname= this.refs.lastname.value;
       let kvadratmeter = this.refs.kvadratmeter.value;
       let rum= this.refs.rum.value;
 

       if (this.state.act === 0) { //new
        let data = {
            firstname, lastname, kvadratmeter, rum
        }
        datas.push(data);


       } else { //edit
        let index = this.state.index;
        datas[index].firstname = firstname;
        datas[index].lastname = lastname;
        datas[index].kvadratmeter = kvadratmeter;
        datas[index].rum = rum;
       }
     
       this.setState({
           datas: datas,
           act: 0
       });

       this.refs.myForm.reset();
       console.log(this.state.datas)
   }

   fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
        datas: datas
    })
   }

   fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.firstname.value = data.firstname;
    this.refs.lastname.value = data.lastname;
    this.refs.kvadratmeter.value = data.kvadratmeter;
    this.refs.rum.value = data.rum;
    this.refs.firstname.focus();

    this.setState({
        act: 1,
        index: i
    })

   }
 
    render() {
        let datas = this.state.datas;
        // const {data, country} = this.state;

        return(<>
            <NavBar />
            <form ref="myForm">
                <input type="text" ref="firstname" placeholder="område" />
                <input type="text" ref="lastname" placeholder="pris" />
                <input type="text" ref="rum" placeholder="rum" />
                <input type="text" ref="kvadratmeter" placeholder="kvadratmeter" />

                <br />
                <br />
                <button onClick={this.fSubmit}>Submit</button>
            </form>
                       
        <List>
            {datas.map((data, i) => {
                    let myString = `${data.lastname}, ${data.kvadratmeter}, ${data.rum}`;
            
                    return (
                        <ListItem key={i}>
                         
                            <div style={{marginRight: 8, borderRadius: 100, width: 44, height: 44, backgroundColor: this.getColor(i)}} />
                            
                            <ListItemText primary={data.firstname} secondary={myString} />
                            <ListItemSecondaryAction style={{paddingRight:60}}>
                                <IconButton edge="end" aria-label="delete" onClick={() => this.fEdit(i)}>
                                    <CreateIcon />
                                </IconButton>
                            </ListItemSecondaryAction>

                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => this.fRemove(i)} >
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>);
            })}
        </List>
       
            
            {/* <Grid container >
                <Grid item xs={4} className={cx(styles.grid, styles.smallGrid)}>
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                </Grid>

                <Grid item xs={8}  className={cx(styles.grid, styles.smallGrid)}>
                    <Cards data={data} />
                </Grid>

                <Grid item xs={8}  className={cx(styles.grid, styles.bigGrid)}>
                    <Chart data={data} country={country} />
                </Grid>

                <Grid item xs={4}  className={cx(styles.grid, styles.bigGrid)}>
                   <Table data={data} />
                </Grid>
             </Grid>      */}
             </>   
        )
    }
}

export default App;
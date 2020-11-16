import React from "react";
import styles from "./App.module.css";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import NavBar from "./components/NavBar/NavBar"
import FilterList from "./components/FilterList/FilterList"
import Popup from "./components/Popup/Popup";
import Form from "./components/Form/Form";

class App extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            openPopup: false,
            setOpenPopup: false,
            act: 0,
            index: "", 
            datas: [{area: "", price: "", squareMeterPrice: "", rooms:"", squareMeters: "", fee: ""}
            ]
        }
    }

    handleFormSubmit = (data) => {
        let datas = this.state.datas;
        datas.push(data);
        
        this.setState({
            datas: datas
        })
    }

    handleAdd = () => {
        
        
        if (this.state.datas.length > 3) {
            this.setState({openPopup: false})
            alert("sorry, you can only have 5 filters")
        } else {
            this.setState({openPopup: true})
        }
    }


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
 
    render() {

        return(<>
            <NavBar />
           
                
            <FilterList datas={this.state.datas} />
       


            <Button variant="outlined" size="medium" color="primary" startIcon={<AddIcon />} onClick={this.handleAdd}>Add new</Button>
             <Popup title={"Add area to search yout search"} openPopup={this.state.openPopup} setOpenPopup = {this.state.setOpenPopup}>
              
             <Form datas = {this.state.datas} handleFormSubmit = {this.handleFormSubmit} />
            </Popup>
             </>   
        )
    }
}

export default App;
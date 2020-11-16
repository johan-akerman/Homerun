import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const FilterList = (props) => {
  
    return (
        <List>

           
            {props.datas.map((data, i) => {

                    let getColor = (i) => {
                        if (i === 0) return "#8bc34a" ;
                        else if (i === 1) return "#03a9f4";
                        else if (i === 2) return "#ff9800";
                        else if (i === 3) return "#9c27b0";
                        else if (i === 4) return "#673ab7";
                    }

                    let generateString = () => {
                        let tmp = "";
                        if (data.rooms) tmp = data.rooms + " rum";
                        if (data.squareMeters) tmp = tmp + ", " + data.squareMeters + " m^2";
                        if (data.price) tmp = tmp + data.price + " kr";
                        if (data.squareMeterPrice) tmp = tmp + data.squareMeterPrice + " kr / m^2";
                        if (data.fee) tmp = tmp + data.fee + " kr / mån";
                        return tmp;
                    }


                    
                    return (
                        <ListItem key={i}>
                            <div style={{marginRight: 8, borderRadius: 100, width: 44, height: 44, backgroundColor: getColor(i)}} />
                            <ListItemText primary={data.area} secondary={generateString()} />
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
    );
}
 
export default FilterList;
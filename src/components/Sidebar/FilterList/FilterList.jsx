import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const FilterList = (props) => {
   let deleteMe = (currentIndex) => {
    props.handleDelete(currentIndex);
  };

  return (
    <List>
      {props.filters.map((data, i) => {
        let getColor = (i) => {
          if (i === 0) return '#8bc34a';
          else if (i === 1) return '#03a9f4';
          else if (i === 2) return '#ff9800';
          else if (i === 3) return '#9c27b0';
          else if (i === 4) return '#673ab7';
        };

        let generateString = () => {
          let tmp = '';
          if (data.rooms) tmp = data.rooms[0] + ' - ' + data.rooms[1] + ' rooms';
          if (data.squareMeters) tmp = tmp + ', ' + data.squareMeters[0] + ' - ' + data.squareMeters[1] + ' sqm';
          if (data.price) tmp = tmp + ', ' + data.price[0] + ' - ' + data.price[1] + ' mSEK';
          if (data.fee) tmp = tmp + ', ' + data.fee + 'k/ month';
          return tmp;
        };
        
        return (
          <ListItem key={i}>
            <div
              style={{
                marginRight: 14,
                borderRadius: 100,
                width: 14,
                height: 14,
                backgroundColor: getColor(i),
              }}
            />
            <ListItemText primary={data.area} secondary={generateString()} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteMe(i)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default FilterList;

import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const root = {
    width: '100%',
    maxWidth: 360,
};


export default class BrokerList extends Component {
  state = {
    toggle: null,
  }

  getBroker(value) {
        switch (value) {
            case 0:
                return 'E-Trade';
            case 1: 
                return 'AmeriTrade';
            case 2: 
                return 'Interactive Brokers';
            case 3:
                return 'Charles Schuab';
            default:
                break;
        } 
  }

  handlePress = (value) => {
      if (this.state.toggle === value) {
          this.setState({
              toggle: null,
          })
      } else {
          this.setState({
              toggle: value
          })
      }
  }

  render() {  
    return (
      <List style={root}>
        {[0, 1, 2, 3].map(value => {
          const labelId = `checkbox-list-label-${value}`;
  
          return (
            <ListItem key={value} role={undefined} dense button onClick={() => { this.handlePress(value) }}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value === this.state.toggle}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${this.getBroker(value)}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    );
  
  }
}
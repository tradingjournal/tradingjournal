import React, { Component } from 'react';
import AppBar from '../Components/AppBar';
import BrokerList from '../Components/BrokerList';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flex: 1,
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'space-between',
        marginBottom: 15,
    },
    brokerlist: {
        display: 'flex',
        justifyContent: 'center',
        padding: 15,
        margin: 15,
    },
    button: {
        margin: 5,
      },
      broker: {
          width: '50%',
          display: 'flex',
          justifyContent: 'center'
      }
}


class BrokerUpload extends Component {
    render() {

        return (
            <div style={styles.root}>
                <AppBar />
                <div style={styles.brokerlist}>
                <Card style={styles.broker}>
                    <BrokerList />
                </Card>
                </div>
                <div style={styles.buttons}>
                <Button variant="contained" color="primary" style={styles.button}>
                    Upload
                </Button>
                <Button variant="contained" color="primary" style={styles.button}>
                    Submit
                </Button>
                </div>
                <div>
                    <p>
                        Please Upload your broker data in a CSV format
                    </p>
                </div>
            </div>
        );
    }
}

export default BrokerUpload;
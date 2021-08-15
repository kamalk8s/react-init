import React, { Component } from 'react';
import { Button, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export class App extends Component {
    render() {
        return (
            <div>
                <Container maxWidth='xl'>
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary">Submit</Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default App

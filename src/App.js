import React, { Component } from 'react';
import { Button, Container } from '@material-ui/core';
import SpacingGrid from './components/grid'

export class App extends Component {
    render() {
        return (
            <div>
                <Container maxWidth='xl'>
                    <h1>Hello World</h1>
                <Button color="primary">Hello World</Button>
                <Button color="secondary">Hello World</Button>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" color="primary" href="#contained-buttons">
                    Link
                </Button>
                <SpacingGrid></SpacingGrid>
                </Container>
            </div>
        )
    }
}

export default App

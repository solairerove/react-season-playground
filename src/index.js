import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                console.log(err);
                this.setState({ errorMessage: err.message });
            }
        );
    }

    render() {
        return (
            <div>
                <div>Hello there !</div>
                <br/>
                <div>Latitude: {this.state.lat}</div>
                <br/>
                <div>Error: {this.state.errorMessage}</div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

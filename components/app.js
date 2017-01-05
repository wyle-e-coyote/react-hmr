import React, { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() =>
            this.increment(),
            1000
        )
    }

    increment() {
        this.setState(({ counter }) => {
            return { counter: counter + 4 };
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { counter } = this.state;

        return (
            <header>
                <div>Webpack is doing its thing with React and ES2015</div>
                <div>{counter}</div>
            </header>
        );
    }
}
import * as React from "react";

export class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDivideByTen = this.handleDivideByTen.bind(this);
        this.handleTimesTen = this.handleTimesTen.bind(this);

        this.state = {
            count: 0
        }

    }

    handleDecrement(e) {
        this.setState({
            count: this.state.count - 1
        });
    }

    handleIncrement(e) {
        this.setState({
            count: this.state.count + 1
        });
    }

    handleDivideByTen(e) {
        this.setState({
            count: this.state.count / 10
        })
    }

    handleTimesTen(e) {
        this.setState({
            count: this.state.count * 10
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleDivideByTen}>/</button>
                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleTimesTen}>*</button>
                <p>Some text</p>
            </div>
        )
    }   
}
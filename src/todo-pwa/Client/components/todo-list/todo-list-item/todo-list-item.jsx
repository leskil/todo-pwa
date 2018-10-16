import * as React from "react";

export class TodoListItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleChecked = this.handleChecked.bind(this);

        this.state = {
            ...props
        }
    }

    handleChecked(e) {
        console.log(e.checked)
        this.setState({
            checked: e.checked
        })
        console.log("todo item", this.state)
    }

    render() {
        return (
            <li><input type="checkbox" onChange={this.handleChecked} checked={this.state.checked} name={this.state.item.id + "_checkbox"} /><label htmlFor={this.state.item.id + "_checkbox"}>{this.state.item.title}</label></li>
        )
    }
}
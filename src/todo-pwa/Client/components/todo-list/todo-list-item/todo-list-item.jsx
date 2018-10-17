import * as React from "react";

export class TodoListItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleChecked = this.handleChecked.bind(this);

        this.state = {
            ...props.item
        }
    }

    handleChecked(e) {     
        this.setState({
            checked: e.target.checked
        });
    }

    render() {
        return (
            <li><input type="checkbox" onChange={this.handleChecked} checked={this.state.checked} id={this.state.id + "_checkbox"} /><label htmlFor={this.state.id + "_checkbox"} className={this.state.checked ? "checked" : ""}>{this.state.title}</label></li>
        )
    }
}
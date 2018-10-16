import * as React from "react";

export class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            title: ""
        };
    }

    generateId() {
        return Date.now();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onTodoAdded({
            id: this.generateId(),
            title: this.state.title,
            checked: false           
        });
        this.setState({
            title: ""
        });
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" placeholder="Add todo" onChange={this.handleInputChange} value={this.state.title} />
            </form>
    }
}
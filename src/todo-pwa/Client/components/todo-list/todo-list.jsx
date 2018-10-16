import * as React from "react";
import { TodoListItem } from "./todo-list-item/todo-list-item";
import { AddTodo } from "./add-todo/add-todo";

export class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.handleOnTodoAdded = this.handleOnTodoAdded.bind(this);

        this.state = {
            items: []
        };
    }

    handleOnTodoAdded(e) {
        this.setState({
            items: [...this.state.items, e]
        })
    }

    render() {
        const listItems = this.state.items.map(item => <TodoListItem item={item} key={item.id} />)
        return (
            <div>                
                { listItems.length > 0 ? <ul>{listItems}</ul> : <p>No todos yet!</p> }
                <AddTodo onTodoAdded={this.handleOnTodoAdded} />
            </div>
        )
    }
}
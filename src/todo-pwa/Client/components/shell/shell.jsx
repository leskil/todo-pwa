import * as React from "react";
import { Counter } from "../counter/counter";
import { TodoList } from "../todo-list/todo-list";
import "./shell.less";
export class Shell extends React.Component {
    render() {
        return (
            <div>
                 <p>Shell.jsx</p>
                 {/* <Counter /> */}
                 <TodoList />
            </div>
        );
    }
}
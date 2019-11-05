import React from 'react';
import './App.css';

class TodoListTasks extends React.Component {
    render = () => {
        const tasks = [
            {title: "CSS",isDone: true},
            {title: "HTML",isDone: true},
            {title: "JS",isDone: true},
            {title: "React,isDone: false},
        ];

    }
        return (
            <div className="todoList-tasks">
                <TodoListTask/>
                <div className="todoList-task">
                 <TodoListTask title="CSS"  isDone={true}/>
                    <TodoListTask title="HTML"  isDone={true}/>
                    <TodoListTask title="JS"  isDone={true}/>
                    <TodoListTask title="React"  isDone={true}/>
            </div>
        );
    }
}

export default TodoListTasks;


import React, { Component } from "react";

export class Home extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            task: "", // State to hold the input value
            tasks: [], // State to hold the list of tasks
        };
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask() {
        if (this.state.task.trim() !== "") {
            this.setState((prevState: any) => ({
                tasks: [...prevState.tasks, prevState.task], // Add the new task to the tasks array
                task: "", // Clear the input field after adding the task
            }));
        }
    }

    render() {
        return (
            <div className="flex flex-col items-center bg-gray-600 p-4 min-h-screen">
                <div className="w-full max-w-md rounded-lg p-6 bg-white shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="task">
                            Enter Task:
                        </label>
                        <input
                            type="text"
                            id="task"
                            className="w-full border rounded p-2"
                            placeholder="Enter your task here"
                            value={this.state.task}
                            onChange={(event) => this.setState({ task: event.target.value })}
                        />
                    </div>
                    <div className="flex justify-between mb-4">
                        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700" onClick={this.handleAddTask}>
                            Add Task
                        </button>
                        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
                            Delete Task
                        </button>
                        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
                            Delete All Tasks
                        </button>
                    </div>
                    <div className="border border-gray-300 rounded h-40 overflow-y-scroll p-2">
                        {/* Render the list of tasks */}
                        <ul>
                            {this.state.tasks.map((task: string, index: number) => (
                                <li key={index} className="border-b py-1">
                                    {task}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <button className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
                            Exit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

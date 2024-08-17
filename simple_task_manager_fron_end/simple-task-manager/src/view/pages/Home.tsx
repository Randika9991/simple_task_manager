import React, { Component } from "react";
import axios from 'axios'; // Import axios

interface Product {
    id: number;
    name: string;
    // Add other relevant fields as per your API response
}

interface HomeState {
    task: string;
    tasks: string[];
    data: Product[];
}

export class Home extends Component<{}, HomeState> {
    private api: any;

    constructor(props: {}) {
        super(props);
        this.state = {
            task: "", // State to hold the input value
            tasks: [], // State to hold the list of tasks
            data: [], // State to hold API data
        };
        this.handleAddTask = this.handleAddTask.bind(this);
        this.api = axios.create({
            baseURL: 'http://localhost:4005'
        });
    }

    handleAddTask() {
        if (this.state.task.trim() !== "") {
            this.setState((prevState) => ({
                tasks: [...prevState.tasks, prevState.task], // Add the new task to the tasks array
                task: "", // Clear the input
            }));
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await this.api.get('/products/All');
            const jsonData: Product[] = response.data;
            this.setState({ data: jsonData });
            console.log({ data: jsonData });
        } catch (error) {
            console.log("error fetching data: " + error);
        }
    }

    render() {
        const { data, task, tasks } = this.state;
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
                            value={task}
                            onChange={(event) => this.setState({ task: event.target.value })}
                        />
                    </div>
                    <div className="flex flex-wrap justify-center mb-4">
                        {data.map((product) => (
                            <div key={product.id} className="bg-gray-200 p-2 m-2 rounded">
                                {product.name}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center mb-4">
                        {data.map((product) => (
                            <div key={product.id} className="bg-gray-200 p-2 m-2 rounded">
                                {product.id}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mb-4">
                        <button
                            className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
                            onClick={this.handleAddTask}
                        >
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
                            {tasks.map((task, index) => (
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

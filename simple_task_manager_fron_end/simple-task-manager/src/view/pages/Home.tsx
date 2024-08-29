import React, { Component } from "react";

interface Task {
    _id: string;
    title: string;
    description: string;
    task: string;
    completed: boolean;
}

interface HomeState {
    data: Task[];
    title: string;
    description: string;
    task: string;
    completed: boolean;
}

export class Home extends Component<{}, HomeState> {
    state: HomeState = {
        data: [],
        title: '',
        description: '',
        task: '',
        completed: false,
    };

    componentDidMount() {
        fetch('http://localhost:3000/api/tasks')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data fetched successfully:', data);
                this.setState({ data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = event.target;
        this.setState({
            [id]: type === 'checkbox' ? checked : value
        } as any);
    }

    handleAddTask = () => {
        const { title, description, task, completed } = this.state;

        if (!title.trim() || !task.trim()) {
            alert('Title and Task are required.');
            return;
        }

        const newTask = { title, description, task, completed };

        fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Task added:', data);
                this.setState(prevState => ({
                    data: [...prevState.data, data],
                    title: '',
                    description: '',
                    task: '',
                    completed: false,
                }));
            })
            .catch(error => {
                console.error('Error adding task:', error);
            });
    }

    handleDeleteTask = (id: string) => {
        fetch(`http://localhost:3000/api/tasks/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(() => {
                // Remove the deleted task from the state
                this.setState(prevState => ({
                    data: prevState.data.filter(task => task._id !== id),
                }));
                alert("good job!")
            })
            .catch(error => {
                console.error('Error deleting task:', error);
            });
    }

    render() {
        const { data, title, description, task, completed } = this.state;
        console.log('Rendered data:', data);

        return (
            <>
                <div className="flex flex-wrap justify-center" style={{ backgroundColor: '#233545', color: 'white' }}>
                    <div className="flex flex-wrap w-full">
                        <div className="flex w-full">
                            <div className="m-2 p-4 border w-1/2">
                                <label htmlFor="title">Title:</label>
                                <input
                                    id="title"
                                    type="text"
                                    className="border p-2 m-1 w-full"
                                    value={title}
                                    onChange={this.handleInputChange}
                                    style={{ backgroundColor: '#616c7b', color: 'white' }}/>
                            </div>
                            <div className="m-2 p-4 border w-1/2">
                                <label htmlFor="description">Description:</label>
                                <input
                                    id="description"
                                    type="text"
                                    className="border p-2 m-1 w-full"
                                    value={description}
                                    onChange={this.handleInputChange}
                                    style={{ backgroundColor: '#616c7b', color: 'white' }}
                                />
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div className="m-2 p-4 border w-1/2">
                                <label htmlFor="task">Task:</label>
                                <input
                                    id="task"
                                    type="text"
                                    className="border p-2 m-1 w-full"
                                    value={task}
                                    onChange={this.handleInputChange}
                                    style={{ backgroundColor: '#616c7b', color: 'white' }}
                                />
                            </div>

                        </div>
                        <div className="flex justify-center w-full mb-4">
                            <button
                                onClick={this.handleAddTask}
                                className="bg-blue-500 text-white p-2 rounded"
                            >
                                Add Task
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {data.length > 0 ? (
                            data.map(task => (
                                <div key={task._id} className="m-2 p-2 border">
                                    <p>Title: {task.title}</p>
                                    <p>Description: {task.description}</p>
                                    <p>Task: {task.task}</p>
                                    <button
                                        onClick={() => this.handleDeleteTask(task._id)}
                                        className="bg-green-500 text-white p-2 rounded mt-2"
                                    >
                                        Completed
                                    </button>

                                </div>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </>
        );
    }
}

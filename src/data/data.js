const defaultTaskState = {
    boards: [
        {
            boardTitle: "Board Title 1",
            boardId: "1",
            tasks: [
                {
                    taskTitle: "Task Title 1",
                    description: "task description",
                    subtasks: [
                        {
                            subtaskTitle: "Subtask Title 1",
                            status: "complete",
                            id: "1",
                        },
                        {
                            subtaskTitle: "Subtask Title 2",
                            status: "ongoing",
                            id: "2",
                        },
                    ],
                    status: "todo",
                    id: "1",
                },
                {
                    taskTitle: "Task Title 2",
                    description: "task description",
                    subtasks: [
                        {
                            subtaskTitle: "Subtask Title 1",
                            status: "complete",
                            id: "1",
                        },
                    ],
                    status: "doing",
                    id: "2",
                },
                {
                    taskTitle: "Task Title 3",
                    description: "task description",
                    subtasks: [],
                    status: "doing",
                    id: "3",
                },
                {
                    taskTitle: "Task Title 4",
                    description: "task description",
                    subtasks: [],
                    status: "done",
                    id: "4",
                },
            ],
        },
        {
            boardTitle: "Board Title 2",
            boardId: "2",
            tasks: [
                {
                    taskTitle: "Second Board",
                    description: "task description",
                    subtasks: [
                        {
                            subtaskTitle: "Subtask Title 1",
                            status: "complete",
                            id: "1",
                        },
                        {
                            subtaskTitle: "Subtask Title 2",
                            status: "ongoing",
                            id: "2",
                        },
                    ],
                    status: "todo",
                    id: "1",
                },
                {
                    taskTitle: "Second Board 2",
                    description: "task description",
                    subtasks: [
                        {
                            subtaskTitle: "Subtask Title 1",
                            status: "complete",
                            id: "1",
                        },
                    ],
                    status: "doing",
                    id: "2",
                },
                {
                    taskTitle: "Second Board 3",
                    description: "task description",
                    subtasks: [],
                    status: "doing",
                    id: "3",
                },
                {
                    taskTitle: "Second Board4",
                    description: "task description",
                    subtasks: [],
                    status: "done",
                    id: "4",
                },
            ],
        },
    ],
};

export default defaultTaskState;

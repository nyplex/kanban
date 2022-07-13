const defaultTaskState = {
    boards: [
        {
            boardTitle: "Platform Launch",
            boardId: "1",
            tasks: [
                {
                    taskTitle: "Build UI for onboarding flow",
                    description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                    subtasks: [
                        {
                            text: "Research competitor pricing and business models",
                            status: "complete",
                            id: "1",
                        },
                        {
                            text: "Outline a business model that works for our solution",
                            status: "ongoin",
                            id: "2",
                        },
                        {
                            text: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                            status: "ongoin",
                            id: "3",
                        },
                    ],
                    status: "todo",
                    id: "1",
                },
                {
                    taskTitle: "Build UI for search",
                    description: "task description",
                    subtasks: [
                        {
                            text: "Subtask Title 1",
                            status: "complete",
                            id: "1",
                        },
                    ],
                    status: "doing",
                    id: "2",
                },
                {
                    taskTitle: "Add account management endpoints",
                    description: "task description",
                    subtasks: [],
                    status: "doing",
                    id: "3",
                },
                {
                    taskTitle: "Create paper prototypes and conduct 10 usability tests with potential customers",
                    description: "task description",
                    subtasks: [],
                    status: "done",
                    id: "4",
                },
            ],
        },
        {
            boardTitle: "Marketing Plan",
            boardId: "2",
            tasks: [
                {
                    taskTitle: "Build settings UI",
                    description: "task description",
                    subtasks: [
                        {
                            text: "Subtask Title 1",
                            status: "complete",
                            id: "1",
                        },
                        {
                            text: "Subtask Title 2",
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
                            text: "Subtask Title 1",
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
        {
            boardTitle: "Roadmap",
            boardId: "3",
            tasks: [
                {
                    taskTitle: "Second Board",
                    description: "task description",
                    subtasks: [
                        {
                            text: "Subtask Title 1",
                            status: "complete",
                            id: "1",
                        },
                        {
                            text: "Subtask Title 2",
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
                            text: "Subtask Title 1",
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

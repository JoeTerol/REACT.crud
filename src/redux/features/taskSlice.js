import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false,
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false,
    }
]
export const taskslice = createSlice({
    name: "tasks",
    initialState,
    reducers:{  
        addTask: (state, action) => {
            state.push(action.payload)

    },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound) {
                state.splice(state.indexOf(taskFound), 1)
            }
    }

 },
})
export const { addTask, deleteTask } = taskslice.actions
export default taskslice.reducer
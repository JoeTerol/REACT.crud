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

    }

})
export default taskslice.reducer
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
    editTask: (state, action) => {
         const { id, title, description } = action.payload
         const foundTask = state.find(task => task.id === id)
           if (foundTask) {
              foundTask.title = title
              foundTask.description = description
        }
             

     }, 
//          editTask: (state, action) => {
//              const { id, title, description } = action.payload;
//              const taskIndex = state.findIndex((task) => task.id === id);
//                  if (taskIndex !== -1) {
//                     upDateTask = { ...state[taskIndex], title, description };
//                     state.splice(taskIndex, 1, upDateTask);
//                 }
// },

        deleteTask: (state, action) => {
         const taskId = action.payload;
         return state.filter((task) => task.id !== taskId);
    },
    //     deleteTask: (state, action) => {
    //         const taskFound = state.find(task => task.id === action.payload)
    //         if (taskFound) {
    //             state.splice(state.indexOf(taskFound), 1)
    //         }
    // },
   
 },
})
export const { addTask, deleteTask, editTask } = taskslice.actions
export default taskslice.reducer
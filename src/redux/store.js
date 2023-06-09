import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../redux/features/taskSlice"

export const store = configureStore({
       task: taskReducer

    }
)
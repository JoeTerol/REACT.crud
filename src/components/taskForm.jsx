import React from "react";
import { useSelector } from "react-redux";

function TaskForm(){
const stateTasks = useSelector((state) => state.tasks);
console.log(stateTasks)

    return(
        <form action=""></form>
    )
}
export default TaskForm
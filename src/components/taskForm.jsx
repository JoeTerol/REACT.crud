import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/taskSlice";
import { v4 as uuid } from "uuid"

function TaskForm() {

const [task, setTask] = useState({
    title:"",
    description:"",
});
const dispatch = useDispatch()

const handlechange = e => {
    setTask({
        ...task,
        [e.target.name]: e.target.value,

});
};
const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
        ...task,
        id: uuid(),
    }))
}



    return(
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder="tittle" onChange={handlechange} />

            <textarea name="description" placeholder="description" onChange={handlechange}></textarea>

            <button>Save</button>

        </form>
    )
}
export default TaskForm

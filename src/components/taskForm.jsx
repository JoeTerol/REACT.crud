import React, { useState } from "react";
import { useSelector } from "react-redux";


function TaskForm() {

const [task, setTask] = useState({
    title:"",
    description:"",
})

const handlechange = e => {
    setTask({
        ...task,
        [e.target.name]: e.target.value,

});
};
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
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

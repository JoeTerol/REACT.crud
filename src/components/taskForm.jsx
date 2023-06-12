import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../redux/features/taskSlice";
import { v4 as uuid } from "uuid"
import { useNavigate, useParams} from "react-router-dom";
function TaskForm() {

const [task, setTask] = useState({
    title:"",
    description:"",
});
const dispatch = useDispatch()
const Navigate = useNavigate()
const params = useParams()
const tasks = useSelector(state => state.tasks)


const handlechange = e => {
    setTask({
        ...task,
        [e.target.name]: e.target.value,

});
};
const handleSubmit = (e) => {
    e.preventDefault();
    
    if (params.id) {
      dispatch(editTask(task))  
    }else {
        dispatch(addTask({
            ...task,
            id: uuid(),
        })
        );
         
    }

  
    Navigate("/")
}

useEffect(() => {
    if (params.id) {
       setTask(tasks.find(task => task.id === params.id))

    }

}, [])

    return(
        <form onSubmit={handleSubmit}>
            <input
             name="title" 
             type="text"
              placeholder="tittle" 
              onChange={handlechange} 
              value={task.title}
            />

            <textarea 
            name="description" 
            placeholder="description" 
            onChange={handlechange}
            value={task.description} 
            ></textarea>

            
            <button>Save</button>
            

        </form>
    )
}
export default TaskForm

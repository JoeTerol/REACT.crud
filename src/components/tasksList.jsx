import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/features/taskSlice";
function TasksList(){
    const tasks = useSelector(state => state.tasks)
    const dispatch= useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    
    };
    

    return (
        <div>
            {tasks.map(task => (
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>  
            ))}
        </div>
    )
}

export default TasksList
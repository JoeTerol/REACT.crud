import { useSelector } from 'react-redux'

import './App.css'
import TaskForm from './components/taskForm'
import TaskList from './components/tasksList'

function App() {
 const taskState = useSelector(state => state.tasks)
  console.log(taskState)

  return (
    <div className='App'> 
    <h1>
      Hello World!
    </h1>
    <TaskForm />
    <TaskList />
    </div>
    
  )
}

export default App

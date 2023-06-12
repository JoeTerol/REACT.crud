import { useSelector } from 'react-redux'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskForm from './components/taskForm'
import TaskList from './components/tasksList'

function App() {
  return (
    <div className='App'> 
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<TaskList/>} />
         <Route path='/create-task' element={<TaskForm/>} /> 
         <Route path='/edit-task/:id' element={<TaskForm/>} /> 
       </Routes>
     </BrowserRouter>
  
    </div>
    
  );
}

export default App

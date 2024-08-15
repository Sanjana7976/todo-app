import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Todoinput from './assets/Todoinput';
import { useState } from 'react';
import Tododisplay from './assets/Tododisplay';

function App() {
  const[todolist, setTodolist] = useState([])

  function addtask(task)
  {
    setTodolist([...todolist, task])
    console.log(todolist)
  }

  function deletetask(id){
    let newlist = [...todolist]
    newlist.splice(id,1)
    setTodolist([...newlist])
  }

  return (
    <>
      <Todoinput addtask={addtask}/>
      {
        todolist.map((item,index)=>{
          return(
            <Tododisplay key={index} item={item} i={index} deletetask={deletetask}/>
          )
        })
      }
    </>
  )
}

export default App

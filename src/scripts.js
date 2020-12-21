import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import useFocus from "./components/useFocus";

const App = () =>{
    const [tasks, setTasks] = useState(
        localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):
        [{name:"Buy House",isComplete: false}, {name:"Buy Car",isComplete:false}]
    )
    const [newTaskText, setnewTaskText] = useState("New Task");

    useEffect(() =>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    const onInputChnage = (e) =>{
        setnewTaskText(e.target.value)
    }

    const InputFieldRef = useFocus()

    const AddnewTask = (e) =>{
        if(newTaskText){
        setTasks([...tasks, {
            name: newTaskText,
            isComplete:false
        }]);
        setnewTaskText("")
        }
    }
    const toggleTask = ((ClickedTasks) =>{
        setTasks(
            tasks.map((task, tabIndex)=>{
                if(tabIndex===ClickedTasks){
                    return{
                        ...task,
                        isComplete:!task.isComplete
                    }
                }
                return task
            })
        )
    })

    const deleteTask = (ClickedTasksIndex) =>{
        const newTaskList = [...tasks]
        newTaskList.splice(ClickedTasksIndex, 1)
        setTasks(newTaskList)
    }

    const NewDate = new Date();
    const Today = String(NewDate).substring(0,15)


    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4"></div>
                <div className="col-lg-4 col-md-4 col-sm-4 main">
                    <h1 className="text-light text-center bg-dark">ToDoList</h1>
                    <input ref={InputFieldRef} type="text" value={newTaskText} onChange={onInputChnage} className="form-control my-4 mb-1" placeholder="Enter new task"></input>
                    <p className="date">{Today}</p>
                    <button onClick = {AddnewTask} className="btn btn-md btn-dark">+Add</button>
                    <ul className="mt-3">
                        {tasks.map((task, taskindex)=>{
                            const ontaskClicked = () =>{
                                toggleTask(taskindex)
                            };
                            const onDeleteClick = ()=>{
                                deleteTask(taskindex)
                            }
                            return(
                             <>
                             <li onClick={ontaskClicked} key={taskindex}>{task.name} {task.isComplete ? "✔️" : "❌"}</li>
                             <i className="fas fa-trash" onClick={onDeleteClick}></i>
                            </>
                            )
                        })}
                    </ul>
                    
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4"></div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#react-root'))
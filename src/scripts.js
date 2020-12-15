import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () =>{

    const [tasks, setTasks] = useState([{name:"Buy House",isComplete: false}, {name:"Buy Car",isComplete:false}])
    const [newTaskText, setnewTaskText] = useState("New Task");
    const onInputChnage = (e) =>{
        setnewTaskText(e.target.value)
    }
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

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4"></div>
                <div className="col-lg-4 col-md-4 col-sm-4 main">
                    <h1 className="text-light text-center bg-dark">ToDoList</h1>
                    <input type="text" value={newTaskText} onChange={onInputChnage} className="form-control my-4" placeholder="Enter new task"></input>
                    <button onClick = {AddnewTask} className="btn btn-md btn-dark">+Add</button>
                    <ul className="mt-3">
                        {tasks.map((task, taskindex)=>{
                            const ontaskClicked = () =>{
                                toggleTask(taskindex)
                            };
                            return <li onClick={ontaskClicked} key={taskindex}>{task.name} {task.isComplete ? "✔️" : "❌"}</li>
                        })}
                    </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4"></div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#react-root'))
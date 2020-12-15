import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () =>{

    const tasks = ["Buy House", "Buy Car", "Go to katar"]

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4"></div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <h1 className="text-light text-center bg-dark">ToDoList</h1>
                    <input className="form-control my-4" placeholder="Enter new task"></input>
                    <button className="btn btn-md btn-primary">+Add</button>
                    <ul className="mt-3">
                        {tasks.map((each)=>{
                            return <li>{each}</li>
                        })}
                    </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4"></div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#react-root'))
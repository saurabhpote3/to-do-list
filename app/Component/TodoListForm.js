"use client";
import React, { useState } from "react";

const TodoListForm = () => {
  const [Task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    setMainTask([...mainTask, { Task, desc }]);
    setTask("");
    setDesc("");
    console.log(mainTask);
  }
function deleteHandler(i){
let copyTask = [...mainTask]
copyTask.splice(i,1)
setMainTask(copyTask)
}

  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="list-none flex justify-between mb-8">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.Task}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button className="bg-red-400 px-4 py-2 rounded font-bold text-white"
          onClick={()=>deleteHandler(i)}
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <form onSubmit={submitHandler} className="m-3 text-center">
        <label htmlFor="" className="block m-2">
          Task:{" "}
        </label>
        <input
          type="text"
          className="p-1 w-2/3 border-2 m-auto block border-black"
          placeholder="Enter the Task"
          value={Task}
          onChange={(e) => setTask(e.target.value)}
        />
        <label htmlFor="" className="block m-2">
          Description{" "}
        </label>
        <textarea
          className="border-2 m-auto p-1 w-2/3 border-black block"
          name=""
          id=""
          placeholder="Enter the Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button className="bg-blue-500 text-white font-semibold p-2 mx-2 my-4 w-28 rounded-full">
          Add Task
        </button>
      </form>

      <hr />
      <div className="p-8 bg-slate-200">{renderTask}</div>
    </>
  );
};

export default TodoListForm;

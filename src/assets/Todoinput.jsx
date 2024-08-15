import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Todoinput({ addtask }) {
  const [task, setTask] = useState("");
  const [todolist, setTodolist] = [];

  return (
    <div>
      <div className="d-flex justfy-content-evenly gap-3">
        <Form.Control
          type="text"
          placeholder="Enter Your task"
          className="w-75 fs-4"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button
          variant="success"
          className="fs-2 px-3 py-1 rounded-circle"
          onClick={() => {
            addtask(task);
            setTask("");
          }}
        >
          +
        </Button>{" "}
      </div>
    </div>
  );
}

export default Todoinput;

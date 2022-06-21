import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./todosSlice";
import { Button,TextField } from "@mui/material";

const mapDispatch = { addTodo };

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const onChange = (e) => setTodoText(e.target.value);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!todoText.trim()) {
            return;
          }
          addTodo(todoText);
          setTodoText("");
        }}
      >
        <TextField variant="standard" value={todoText} onChange={onChange} />
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
};

export default connect(null, mapDispatch)(AddTodo);

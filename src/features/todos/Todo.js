import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const Todo = ({ onClick, completed, text, id }) => {
  console.log(text, "hello");
  return (
    <FormControlLabel
      control={<Checkbox onClick={onClick} />}
      sx={{
        textDecoration: completed ? "line-through" : "none",
      }}
      label={text}
    />

    // <Checkbox
    //   value={id}
    //   label={text}
    //   onClick={onClick}
    //   style={{
    //     textDecoration: completed ? "line-through" : "none",
    //     padding: "5px 0",
    //   }}
    // ></Checkbox>
  );
};
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;

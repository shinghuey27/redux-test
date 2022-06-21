import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import Typography from '@mui/material/Typography';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div style={{display:"flex",flexDirection:"column",width:"290px"}}>
      {todos.length ? (
        <>
          {todos.map((todo) => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
          ))}
          </>
      ) : (
        <Typography  variant="h6" component="div" gutterBottom>Nothing is here</Typography>
      )}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;

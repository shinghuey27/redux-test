import "./App.css";
import AddTodo from "./features/todos/AddTodo";
import VisibleTodoList from "./features/todos/VisibleTodoList";
import Footer from "./features/filters/Footer";
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div
      style={{
        paddingTop: "4rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
        <Typography  variant="h4" component="div" gutterBottom>TODO LIST WITH REDUX TOOLKIT</Typography>
      <div style={{background:"#f0f0f0",padding:"2rem",borderRadius:"20px"}}>
        <AddTodo />
        <div
          style={{ minHeight: "100px", display: "flex", alignItems: "center",marginBottom:"1rem" }}
        >
          <VisibleTodoList />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import AddTodo from "./features/todos/AddTodo";
import VisibleTodoList from "./features/todos/VisibleTodoList";
import Footer from "./features/filters/Footer";

function App() {
  return (
    <div style={{paddingTop:"4rem",display:"flex",alignItems:"center",flexDirection:"column"}}>
      <AddTodo />
      <div style={{minHeight:"100px",display:"flex",alignItems:"center"}}>
      <VisibleTodoList />

      </div>
      <Footer />
    </div>
  );
}

export default App;

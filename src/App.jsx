import "./App.css";
import CategoryForm from "./features/category/CategoryForm";
import Navbar from "./ui/Navbar";

function App() {
  return (
    <div className=" container bg-secondary-100">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <CategoryForm />
      </div>
    </div>
  );
}

export default App;

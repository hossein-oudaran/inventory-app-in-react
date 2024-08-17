import "./App.css";
import CategoryForm from "./features/category/CategoryForm";
import Navbar from "./ui/Navbar";

function App() {
  return (
    <div className=" h-screen conatainer bg-secondary-100">
      <Navbar />
      <CategoryForm />
    </div>
  );
}

export default App;

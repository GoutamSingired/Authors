import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Display from "./Components/Display";
import Form from "./Components/Form";
import Edit from "./Components/Edit";


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/new" element={<Form />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

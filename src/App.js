import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ApiRicette from "./components/ApiRicette";


function App() {
  return (
    <div className="App">
      <div>
      
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/recipes/:type" element={<ApiRicette />} />
        </Routes>
      </BrowserRouter>
      <div className="App">
        
      </div>
    </div>
    </div>
  );
}

export default App;

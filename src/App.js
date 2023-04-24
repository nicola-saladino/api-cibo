import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ApiRicette from "./components/ApiRicette";
import ApiSingle from "./components/ApiSingle";


function App() {
  return (
    <div className="App">
      <div>
      
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/recipes/:type" element={<ApiRicette />} />
           <Route path="/recipe/:id" element={<ApiSingle />} />
        </Routes>
      </BrowserRouter>
      <div className="App">
        
      </div>
    </div>
    </div>
  );
}

export default App;

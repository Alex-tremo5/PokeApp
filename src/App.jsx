import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css'; 


import Home from "./views/Home";
import Characters from "./views/Characters";
import Details from "./views/Details";

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={ <Home /> }
        />

        <Route
          path="/characters" 
          element={< Characters />} 
        />

        <Route 
          path="/characters/:id"
          element= {< Details />}
        />
      </Routes>
    </div>
  );
};
export default App;

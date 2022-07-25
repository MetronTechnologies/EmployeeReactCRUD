import './App.css';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
  return (
      <div>
          <Router>
                  <HeaderComponent />
                  <div className="container">
                      <Routes>
                          <Route path="/"  element={<ListEmployeeComponent />} />
                          <Route path="/allemployees"  element={<ListEmployeeComponent />} />
                          <Route path="/addemployee" element={<CreateEmployeeComponent />} />
                          <Route path="/editemployee/:id" element={<CreateEmployeeComponent />} />
                      </Routes>
                  </div>
                  <FooterComponent />
          </Router>
      </div>
  );
}

export default App;

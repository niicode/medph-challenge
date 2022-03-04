import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css";
import ConsultantForm from "./components/ConsultantForm";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
      <Layout>
      <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/consulate" element={<ConsultantForm />} exact />
          <Route path="/login" element={<Login />} exact />
        </Routes>
      </Layout>
      </Router>
    </div>
  );
}

export default App;

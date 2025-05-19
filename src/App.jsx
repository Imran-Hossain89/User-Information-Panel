import Login from "./assets/components/Login";
import CreateAccount from "./assets/components/CreateAccount";
// import Information from "./assets/components/Information";
import Users from "./assets/components/Users";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create" element={<CreateAccount />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;

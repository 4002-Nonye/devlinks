import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DevLinks from "./pages/DevLinks";
import DevLinksPreview from "./pages/DevLinksPreview";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} />
        <Route index element={<Navigate replace to="devlinks" />} />
        <Route element={<DevLinks />} path="devlinks" />
        <Route element={<DevLinksPreview />} path="preview" />
        <Route element={<Login />} path="login" />
        <Route element={<Signup />} path="signup" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

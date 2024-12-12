import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";


const isAuthenticated = () => {
  const user = localStorage.getItem("currentUser");
  return user ? true : false; 
};


const PrivateRoute = ({ element }: any) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};
console.log(PrivateRoute)

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    
    if (isAuthenticated()) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

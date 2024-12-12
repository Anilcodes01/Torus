import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/authenticationSlice";
import { useNavigate } from "react-router-dom";


interface RootState {
  authentication: {
    error: string | null;
  };
}

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const { error } = useSelector((state: RootState) => state.authentication);

  const handleLogin = () => {
    
    dispatch(login({ email }));

    
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/"); 
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-2xl">
      <h1 className="text-3xl font-bold">Welcome back!</h1>
      

      <div className="flex flex-col">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="rounded-lg mt-4 border outline-none p-1"
        />
        <button
          className="rounded-lg mt-4 text-white p-1 bg-blue-500"
          onClick={handleLogin}
        >
          Login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

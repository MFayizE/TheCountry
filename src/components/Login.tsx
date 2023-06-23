import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { loginWithEmailAndPassword } from "../redux/authService";
import Input from "../shared/Input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../shared/Button";
import LoginWall from "../shared/LoginWall";
import SocialLogo from "../shared/SocialLogo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log("hello");

    const isLoggedIn = loginWithEmailAndPassword(email, password);
    if (isLoggedIn) {
      dispatch(login(email));
      toast.success("Login successful", { position: "top-right" });
    } else {
      toast.error("Invalid email or password", { position: "top-right" });
    }
  };

  return (
    <>
      <section className="grid grid-col-1 lg:grid-cols-2 items-center justify-center h-screen overflow-y-hidden">
        <div className=" lg:px-32  mt-20 lg:mt-0">
          <h1 className="font-bold text-[#3D3D3D] text-[32px] mb-4">Sign In</h1>
          <div className="mb-8 font-bold  text-[16px]">
            <span className="text-[#3D3D3D]">New user?</span>{" "}
            <span className="text-[#587FFF] cursor-pointer">
              Create an account
            </span>
          </div>
          <div className="mb-10">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="inline-flex items-center mt-3 mb-6">
              <input type="checkbox" className=" h-5 w-5 accent-[#3D3D3D]" />
              <span className="ms-2 font-semibold text-[#3D3D3D] text-[16px]">
                Keep me signed in
              </span>
            </label>
          </div>
          <div className="mb-10">
            <Button label="Login" onClick={handleLogin} />
          </div>

          <div className="flex justify-between align-middle gap-6 mb-10">
            <div className="bg-[#CFCFCF] h-1 w-32"></div>
            <div className="text-[#3D3D3D] font-bold text-[13px]">
              Or Sign In With
            </div>
            <div className="bg-[#CFCFCF] h-1 w-32"></div>
          </div>
          <SocialLogo/>
        </div>
        <div className="flex justify-center invisible lg:visible">
          <LoginWall />
        </div>
      </section>
    </>
  );
};

export default Login;

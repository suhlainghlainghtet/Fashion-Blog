import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../../config/config";
import { UseBlogWebAppContext } from "../../context/BlogAppContext";
import "./signin.css";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { accessToken, user, updateData, ...data } = UseBlogWebAppContext();
  const navigate = useNavigate();
  const handleSignIn = async () => {
    const isVaild = userInfo.email.length > 0 && userInfo.password.length > 0;
    if (!isVaild) return console.log("Please fill your information....");
    try {
      const response = await axios.post(`${config.apiUrl}/signin`, userInfo);

      if (response.status === 200) {
        const userId = response.data.user.id;
        const responseData = await axios.get(
          `${config.apiUrl}/users/user-image/${userId}`
        );
        const userInfo = {
          id: userId,
          userName: response.data.user.userName,
          userEmail: response.data.user.userEmail,
          userImage: responseData.data,
          isArchived: response.data.isArchived === undefined ? false : true,
        };

        updateData({
          ...data,
          accessToken: response.data.accessToken,
          user: userInfo,
        });
        navigate(-2);
      }
    } catch (error) {
      console.log("Error is ........", error);
    }
  };
  return (
    <div className="pt-[5rem] 360:pt-0 bg_img flex flex-col justify-center items-center ">
      <span
        className="mb-4 360:mb-5 2xl:mb-6 text-[1.5rem] 360:text-[1.7rem] lg:text-[2rem] 2xl:text-[2.3rem]
      font-navItemsForfont  text-dark-blue font-bold tracking-[0.05rem] select-none"
      >
        Welcome Back!
      </span>
      <div className="flex flex-col gap-y-[1rem] 360:gap-y-[1.8rem] lg:gap-y-[2rem] 3xl:gap-y-[2.5rem]">
        <div className="relative">
          <label htmlFor="email">
            <i
              className="ri-mail-fill text-dark-blue text-[1.2rem]
             absolute top-2 left-2"
            ></i>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            className="py-[0.6rem] pl-[2rem] text-[15px] rounded-xl
             w-[280px] 360:w-[300px] md:w-[350px] lg:w-[380px] bg-white focus:outline-none"
          />
        </div>
        <div className="relative">
          <label htmlFor="password">
            <i
              className="ri-lock-fill text-dark-blue text-[1.2rem]
             absolute top-[6px] left-2"
            ></i>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
            className="py-[0.6rem] pl-[2rem] text-[15px] bg-white 
             rounded-xl w-[280px] 360:w-[300px] md:w-[350px] lg:w-[380px] focus:outline-none"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => handleSignIn()}
            className="py-[8px] lg:py-[10px] lg:px-[18px] px-[17px] bg-dark-blue text-white cursor-pointer rounded-lg
             text-[0.899rem] xl:text-[0.998rem] "
          >
            Sign in
          </button>
        </div>
        <div className="flex gap-x-2 justify-center items-center">
          <p className="text-dark-blue font-bold text-[14px] 360:text-[16px] select-none">
            Don't have an account?
          </p>
          <Link to="/signup">
            <button
              className=" py-[8px] lg:py-[10px] lg:px-[18px] px-[17px] bg-pure-orange text-dark-blue font-bold cursor-pointer rounded-lg
            text-[0.899rem] xl:text-[0.998rem]"
            >
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignIn;

import "./logout.css";
const Logout = () => {
  return (
    <div className="pt-[5rem] 360:pt-0 bg_img flex flex-col justify-center items-center ">
      <span
        className="mb-4 360:mb-5 text-[1.5rem] 360:text-[1.7rem] lg:text-[2rem] 
      font-navItemsForfont  text-dark-blue font-bold tracking-[0.05rem] select-none"
      >
        Welcome Back!
      </span>
      <form className="flex flex-col gap-y-[1rem] 360:gap-y-[1.8rem] lg:gap-y-[2rem]">
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
            className="py-[0.6rem] pl-[2rem] text-[15px] bg-white 
             rounded-xl w-[280px] 360:w-[300px] md:w-[350px] lg:w-[380px] focus:outline-none"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="py-[8px] lg:py-[10px] lg:px-[18px] px-[17px] bg-dark-blue text-white cursor-pointer rounded-lg
             text-[0.899rem] xl:text-[0.998rem] "
          >
            Sign in
          </button>
        </div>
        <div className="flex gap-x-1 justify-center">
          <p className="text-dark-blue font-bold text-[14px] select-none">
            Don't have an account?
          </p>
          <a
            href="#"
            className=" text-blue-900 border-b-2 text-[14px] border-blue-900"
          >
            Sing Up
          </a>
        </div>
      </form>
    </div>
  );
};
export default Logout;

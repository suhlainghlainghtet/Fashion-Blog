import cover10 from "../../assets/cover10.jpg";
import cover7 from "../../assets/cover7.jpg";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center mb-[0.7rem] md:mb-[1.3rem] sm:mb-[1rem]">
        <span className="text-md text-dark-blue xl:text-lg font-navItemsForfont font-[600] md:mb-1">
          Stylish Ways To Wear
        </span>
        <p className="text-4xl text-dark-blue md:text-5xl xl:text-6xl font-fontforWebbly tracking-widest ">
          Fashion Blog
        </p>
      </div>
      <img
        src={cover10}
        className="object-cover h-auto w-auto md:block hidden"
        alt="fashion cover photo"
        title="fashion cover photo "
      />
      <img
        src={cover7}
        className="object-cover h-auto w-[100%] md:hidden block"
        alt="fashion cover photo"
        title="fashion cover photo "
      />
    </div>
  );
};
export default Hero;

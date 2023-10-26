import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import me1 from "../../assets/me1.jpg";
import MobileNavaBar from "../mobileNavaBar/MobileNavaBar";
import "./navaBar.css";
export default function NavaBar() {
  const [open, setOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState(false);

  // ==========Change Background Header==========
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 50);
    });
  }, [scroll]);

  return (
    <div
      className={
        scroll
          ? "text-black sticky z-[999] top-0  w-full  mx-auto h-50px flex justify-evenly items-center bg-white shadow"
          : "text-black sticky z-[999] top-0   w-full  mx-auto h-50px flex justify-evenly  items-center  "
      }
    >
      <h1 className=" hidden md:flex text-pure-orange font-fontforWebbly cursor-default font-bold md:text-[2.25rem] xl:text-[2.3rem] 3xl:text-[2.8rem] text-[2rem] tracking-wider">
        webbly
      </h1>
      <ul className="hidden md:flex gap-4 lg:gap-6 md:gap-5 xl:gap-7 2xl:gap-9 4xl:gap-11 font-navItemsForfont uppercase text-md md:text-lg 2xl:text-xl 3xl:text-[1.4rem] cursor-pointer text-dark-blue">
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>write</li>
        <li>logout</li>
      </ul>
      <div className="hidden md:flex items-center gap-2 mt-1 mb-1">
        <i className="ri-search-line text-2xl text-dark-blue cursor-pointer"></i>
        <img
          src={me1}
          alt="profile"
          title="profile"
          className="w-[50px] h-[50px] rounded-full cursor-pointer "
        />
      </div>

      {/* =============For mobile=============== */}
      <MobileNavaBar open={open} setOpen={setOpen} />
    </div>
  );
}

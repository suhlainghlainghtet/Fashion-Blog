import { Link } from "react-router-dom";
import cardImg2 from "../../assets/cardImg2.jpg";
interface Prop {
  open: boolean;
  setOpen: (value: boolean) => void;
  activeNavItem: null | string;
  setActiveNavItem: (value: string) => void;
}
const MobileNavaBar = ({
  open,
  setOpen,
  activeNavItem,
  setActiveNavItem,
}: Prop) => {
  const openNavBarFormobile = () => {
    setOpen(true);
  };
  const closeNavBarFormobile = () => {
    setOpen(false);
  };

  // ===============Active Nava Item============
  const handleActiveNavItemClick = (item: string) => {
    setActiveNavItem(item);
    setOpen(false);
  };
  return (
    <div className="block md:hidden w-full">
      <div className=" w-full">
        <div className="flex justify-between w-[100%] items-center px-4">
          <div className="flex items-center justify-start gap-5 ">
            <i
              className="ri-menu-fill text-[2rem] text-dark-blue cursor-pointer"
              onClick={openNavBarFormobile}
            ></i>
            <h1 className="text-pure-orange  pb-2 text-center font-fontforWebbly cursor-default font-bold text-[2.2rem] tracking-wider">
              webbly
            </h1>
          </div>
          <i className="ri-search-line text-[1.8rem] cursor-pointer  text-dark-blue"></i>
        </div>
      </div>
      <div
        className={
          open
            ? "fixed flex-col  w-[80%] h-screen bg-light-gray  top-0 left-[0] box_shadow ease-in-out duration-300 "
            : "fixed  left-[-100%] ease-in-out duration-200  "
        }
      >
        <div className="absolute left-[4] bg-pure-orange w-full px-4 360:py-4 py-3 cursor-pointer ">
          <img
            src={cardImg2}
            alt="profile"
            title="profile"
            className="w-[65px] h-[65px] rounded-full border-[3px] border-light-gray mb-1 "
          />
          <div
            className="w-[27px] h-[27px] border-[1px] border-light-gray
           absolute left-[3.5rem] bottom-[3.6rem] bg-dark-blue rounded-full cursor-pointer"
          >
            <i
              className="ri-pencil-fill 
           text-pure-orange text-[18px] grid place-items-center"
            ></i>
          </div>
          <h2 className="text-2xl mt-3 tracking-wide font-navItemsForfont font-semibold text-dark-blue">
            Smiling
          </h2>
        </div>
        <i
          onClick={closeNavBarFormobile}
          className="ri-close-fill  text-[2.3rem] top-3 text-dark-blue cursor-pointer absolute right-[5%]"
        ></i>
        <ul
          className=" flex flex-col 360:gap-y-[1.6rem] gap-y-[1rem] px-5 text-dark-blue
         font-navItemsForfont uppercase text-lg cursor-pointer pt-[9rem] 360:pt-[10rem]"
        >
          <span className="flex gap-2 border-b-2 pb-3 360:pb-4 w-full">
            <Link to="/">
              <li
                className={activeNavItem === "home" ? "active " : ""}
                onClick={() => handleActiveNavItemClick("home")}
              >
                <i className="ri-home-fill text-xl"></i> home
              </li>
            </Link>
          </span>
          <span className="flex gap-2 border-b-2 pb-3 360:pb-4 w-full">
            <Link to="/about">
              <li
                className={activeNavItem === "about" ? "active" : ""}
                onClick={() => handleActiveNavItemClick("about")}
              >
                <i className="ri-group-fill text-xl"></i> about
              </li>
            </Link>
          </span>
          <span className="flex gap-2 border-b-2 pb-3 360:pb-4 w-full">
            <Link to="/write">
              <li
                className={activeNavItem === "write" ? "active" : ""}
                onClick={() => handleActiveNavItemClick("write")}
              >
                <i className="ri-contacts-book-2-fill text-xl"></i> write
              </li>
            </Link>
          </span>

          <span className="flex gap-2 border-b-2 pb-3 360:pb-4 w-full">
            <Link to="/contact">
              <li
                className={activeNavItem === "contact" ? "active" : ""}
                onClick={() => handleActiveNavItemClick("contact")}
              >
                <i className="ri-pencil-fill text-xl"></i> contact
              </li>
            </Link>
          </span>
          <span className="flex gap-2 border-b-2 pb-3 360:pb-4 w-full">
            <i className="ri-logout-box-r-fill text-xl"></i> <li>logout</li>
          </span>
        </ul>
      </div>
    </div>
  );
};
export default MobileNavaBar;

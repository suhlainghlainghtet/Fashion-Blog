import "remixicon/fonts/remixicon.css";
import cardImg2 from "../../assets/cardImg2.jpg";
import "./settingsForMobile.css";
const SettingsForMobile = () => {
  return (
    <div className=" flex flex-col gap-y-[2rem]">
      <div className="bg-dark-blue flex flex-col gap-y-[2rem] 390:gap-y-[2.5rem] ">
        <div className="flex justify-between items-center text-white mx-[0.5rem] 360:mx-[1.2rem] text-[17px] ">
          <button className="cursor-pointer ">
            <i className="ri-arrow-left-line text-[1.3rem] "></i>
          </button>
          <h3 className="select-none">Edit Profile</h3>
          <button className="cursor-pointer">Save</button>
        </div>

        <div className="relative flex justify-center mb-[2.5rem] 390:mb-[3.5rem]">
          <img
            src={cardImg2}
            alt="profile img"
            title="profile_img"
            className="w-[130px] h-[130px] rounded-full"
          />
          <div
            className="w-[34px] h-[34px] rounded-full bg-pure-orange
           absolute bottom-[0.5rem] right-[6rem] 360:right-[7.2rem] 375:right-[7.7rem] 375:bottom-[0.3rem]
             390:right-[8rem] 390:bottom-[0.5rem] 412:right-[8.5rem] 414:right-[8.7rem] 428:right-[9.2rem]
             sm:right-[15.8rem] sm:bottom-[0.6rem]"
          >
            <label htmlFor="camera">
              <i className="ri-camera-line grid place-items-center text-dark-blue text-[22px]"></i>
            </label>
            <input
              type="file"
              name="file from device"
              id="camera"
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
      <div className=" mx-[1rem] flex flex-col gap-y-[1.5rem] mb-[2rem] 360:mb-0 ">
        <div className="flex flex-col">
          <label htmlFor="userName" className="mb-2 text-dark-gray ">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            className="boxShadow border-b-2 focus:outline-none
             focus:border-b-2 focus:border-dark-blue py-2 pl-3 text-[16px]"
            autoFocus={true}
            id="userName"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="userEmail" className="mb-2 text-dark-gray">
            Email
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            className="boxShadow border-b-2 focus:outline-none
             focus:border-b-2 focus:border-dark-blue py-2 pl-3 text-[16px]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="userPassword" className="mb-2 text-dark-gray">
            Password
          </label>
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            className="boxShadow border-b-2 focus:outline-none
             focus:border-b-2 focus:border-dark-blue py-2 pl-3 text-[16px]"
          />
        </div>
      </div>
    </div>
  );
};
export default SettingsForMobile;

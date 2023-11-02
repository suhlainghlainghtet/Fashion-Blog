import cardImg2 from "../../assets/cardImg2.jpg";
import "../../components/settingsForMobile/settingsForMobile.css";
import "./settings.css";
export default function Settings() {
  return (
    <div>
      {/* ===================For large devices======= */}
      <div className=" pt-[3rem] pb-[4rem] mx-[1.5rem]  ">
        <div className="flex justify-around items-center mb-[4rem]">
          <h3 className="text-[1.35rem] lg:text-[1.5rem] font-fontforWebbly font-bold text-dark-blue border-b-[4px] border-pure-orange">
            Account Settings
          </h3>
          <a
            className=" text-romantic rounded-md py-[6px] px-[14px]
          text-[14px] bg-dark-blue font-bold cursor-pointer "
          >
            Delete Account
          </a>
        </div>

        <div className="flex justify-center items-center flex-col mb-[1.7rem] 2xl:mb-[2rem]">
          <img
            src={cardImg2}
            alt="profile img"
            title="profile_img"
            className="w-[130px] h-[130px] lg:w-[160px] lg:h-[160px] rounded-full mb-[1.2rem] lg:mb-[1.5rem]
             border-[3px] border-romantic"
          />
          <div>
            <label
              htmlFor="change-photo"
              className=" bg-pure-orange rounded-md py-[6px] px-[10px]
          text-[14px] text-dark-blue font-bold cursor-pointer "
            >
              Change Avatar
            </label>
            <input
              type="file"
              name="change-photo"
              id="change-photo"
              className="hidden"
            />
          </div>
        </div>

        <div className=" margin w-[500px]  flex flex-col gap-y-[1.5rem]  ">
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

        <div className="margin flex justify-center gap-x-[1.5rem]  mt-[2rem]">
          <a
            className=" bg-romantic  py-[6px] px-[14px]
          text-[14px] text-dark-blue font-bold cursor-pointer "
          >
            Cancel
          </a>
          <a
            className=" bg-pure-orange  py-[6px] px-[15px]
          text-[14px] text-dark-blue font-bold cursor-pointer "
          >
            Save
          </a>
        </div>
      </div>
      {/* ==================For Mobile=============== */}
      {/* <SettingsForMobile /> */}
    </div>
  );
}

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import "../../components/settingsForMobile/settingsForMobile.css";
import { config } from "../../config/config";
import { UseBlogWebAppContext } from "../../context/BlogAppContext";
import { handleCreateImageUpload } from "../../utils";
import "./settings.css";

export default function Settings() {
  const [file, setFile] = useState<File | null>();
  const { user, accessToken, updateData, ...data } = UseBlogWebAppContext();
  const userId = String(user?.id && user?.id);
  const [updateUserInfo, setUpdateUserInfo] = useState({
    userName: user?.userName,
    userEmail: user?.userEmail,
    userPassword: user?.userPassword || undefined,
    userImage: "",
  });

  const navigate = useNavigate();

  const updateUser = async (userId: string, imageURL: string) => {
    updateUserInfo.userImage = imageURL;
    await axios.put(`${config.apiUrl}/settings/${userId}`, updateUserInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const getUser = await axios.get(`${config.apiUrl}/users/${userId}`);
    const newUserInfo = {
      id: getUser.data.id,
      userName: getUser.data.userName,
      userEmail: getUser.data.userEmail,
      userImage: imageURL,
      isArchived: getUser.data.isArchived === 0 ? false : true,
    };
    updateData({ ...data, accessToken: accessToken, user: newUserInfo });
  };

  // Updating User Information
  const handleUpdateUserInfo = async () => {
    try {
      if (file) {
        const formDataToSend = new FormData();
        formDataToSend.append("file", file);
        formDataToSend.append("upload_preset", "ytmo583o");
        const imageUrl = await handleCreateImageUpload(formDataToSend);
        updateUser(userId, imageUrl);
      } else {
        const responseData = await axios.get(
          `${config.apiUrl}/users/user-image/${userId}`
        );
        const imageUrl = responseData.data;
        updateUser(userId, imageUrl);
      }
      navigate("/");
    } catch (error) {
      console.log("Error", error);
    }
  };

  // Deleteing User Account
  const handleDeleteUserAccount = async () => {
    await axios.delete(`${config.apiUrl}/settings/${user?.id}`);
    const getUser = await axios.get(`${config.apiUrl}/users/${user?.id}`);
    const newUserInfo = {
      id: getUser.data.id,
      userName: getUser.data.userName,
      userEmail: getUser.data.userEmail,
      userImage: user?.userImage,
      isArchived: getUser.data.isArchived === undefined ? false : true,
    };
    updateData({ ...data, accessToken: accessToken, user: newUserInfo });
    navigate("/");
  };
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
            onClick={handleDeleteUserAccount}
          >
            Delete Account
          </a>
        </div>

        <div className="flex justify-center items-center flex-col mb-[1.7rem] 2xl:mb-[2rem]">
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              alt="profile img"
              title="profile_img"
              className="w-[130px] h-[130px] lg:w-[160px] lg:h-[160px] rounded-full mb-[1.2rem] lg:mb-[1.5rem]
             border-[3px] border-romantic"
            />
          ) : (
            <img
              src={user?.userImage ? user.userImage : profile}
              alt="profile img"
              title="profile_img"
              className="w-[130px] h-[130px] lg:w-[160px] lg:h-[160px] rounded-full mb-[1.2rem] lg:mb-[1.5rem]
           border-[3px] border-romantic"
            />
          )}
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
              accept="image/*"
              name="change-photo"
              id="change-photo"
              className="hidden"
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setFile((e.target as HTMLInputElement)?.files?.[0]);
              }}
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
              defaultValue={user?.userName && user?.userName}
              id="userName"
              onChange={(e) =>
                setUpdateUserInfo({
                  ...updateUserInfo,
                  userName: e.target.value,
                })
              }
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
              defaultValue={user?.userEmail && user.userEmail}
              onChange={(e) =>
                setUpdateUserInfo({
                  ...updateUserInfo,
                  userEmail: e.target.value,
                })
              }
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
              onChange={(e) =>
                setUpdateUserInfo({
                  ...updateUserInfo,
                  userPassword: e.target.value,
                })
              }
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
            onClick={handleUpdateUserInfo}
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

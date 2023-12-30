import axios from "axios";
import Moment from "moment";
import { config } from "../config/config";

export const handleCreateImageUpload = async (data: FormData) => {
  const response = await axios.post(
    `${config.uploadImageApiUrl}/image/upload`,
    data
  );
  return response.data.url;
};

export const creatingPostingDate = (updatedAt: string) => {
  const dmy = Moment(updatedAt).format("DD-MM-YYYY");
  const dateArray = dmy.split("-");
  const timeArray = Moment(updatedAt).format("HH-mm-ss").split("-");
  const date = Number(dateArray[0]);
  const month = Number(dateArray[1]);
  const year = Number(dateArray[2]);
  const hours = Number(timeArray[0]);
  const minutes = Number(timeArray[1]);
  const currentDateTime = new Date();
  const currentDateFormat = currentDateTime.toLocaleDateString().split("/");
  const getDate = Number(currentDateFormat[1]);
  const getMonth = Number(currentDateFormat[0]);
  const getYear = Number(currentDateFormat[2]);
  const getHours = currentDateTime.getHours();
  const getMinutes = currentDateTime.getMinutes();
  console.log(typeof getHours);

  if (getMonth === month && getYear === year) {
    const dateForPost = getDate - date;

    if (dateForPost > 0 && dateForPost < 7) {
      return (
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          {dateForPost > 1
            ? `${dateForPost} days ago`
            : `${dateForPost} day ago`}
        </span>
      );
    } else if (dateForPost !== 0) {
      const calculateWeeks = dateForPost / 7;
      const weekForPost = Math.floor(calculateWeeks);
      if (weekForPost < 4) {
        return (
          <span className=" font-[400] text-[16px] text-dark-blue italic">
            {weekForPost > 1
              ? `${weekForPost} weeks ago`
              : `${weekForPost} week ago`}
          </span>
        );
      }
    } else {
      const minForPost = getMinutes - minutes;
      console.log("isVaild.....", getHours);
      console.log("isVaildhh.....", hours);
      if (minForPost > 0 && minForPost < 60) {
        return (
          <span className=" font-[400] text-[16px] text-dark-blue italic">
            {minForPost > 1
              ? `${minForPost} mins ago`
              : `${minForPost} min ago`}
          </span>
        );
      } else if (minForPost === 0) {
        return (
          <span className=" font-[400] text-[16px] text-dark-blue italic">
            1 min ago
          </span>
        );
      } else {
        const hoursForPost = getHours - hours;
        return (
          <span className=" font-[400] text-[16px] text-dark-blue italic">
            {hoursForPost > 1
              ? `${hoursForPost} hours ago`
              : `${hoursForPost} hour ago`}
          </span>
        );
      }
    }
  } else if (getMonth - month !== 0) {
    if (getYear !== year && getMonth < month) {
      const monthForPost = getMonth - month + 12;
      return (
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          {monthForPost > 1
            ? `${monthForPost} months ago`
            : `${monthForPost} month ago`}
        </span>
      );
    } else if (getYear === year && getMonth > month) {
      const monthForPost = getMonth - month;
      return (
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          {monthForPost > 1
            ? `${monthForPost} months ago`
            : `${monthForPost} month ago`}
        </span>
      );
    } else {
      const yearForPost = getYear - year;
      return (
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          {yearForPost > 1
            ? `${yearForPost} years ago`
            : `${yearForPost} year ago`}
        </span>
      );
    }
  } else if (getMonth - month === 0) {
    return (
      <span className=" font-[400] text-[16px] text-dark-blue italic">
        1 year ago
      </span>
    );
  } else {
    return (
      <span className=" font-[400] text-[16px] text-dark-blue italic">
        1 min ago
      </span>
    );
  }
};

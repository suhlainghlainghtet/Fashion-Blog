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
  const day = Number(dateArray[0]);
  const month = Number(dateArray[1]);
  const year = Number(dateArray[2]);
  const hours = Number(timeArray[0]);
  const minutes = Number(timeArray[1]);
  const currentDateTime = new Date();
  const currentDateFormat = currentDateTime.toLocaleDateString().split("/");
  const getDay = Number(currentDateFormat[1]);
  const getMonth = Number(currentDateFormat[0]);
  const getYear = Number(currentDateFormat[2]);
  const getHours = currentDateTime.getHours();
  const getMinutes = currentDateTime.getMinutes();

  let addNum: number;
  if (month === (9 || 4 || 6 || 11)) {
    addNum = 30;
  } else if (month === 2) {
    addNum = 28;
  } else {
    addNum = 31;
  }

  if (getMonth === month && getDay === day && getYear === year) {
    if (hours < getHours && (getMinutes === minutes || minutes < getMinutes)) {
      const hoursForPost = getHours - hours;
      return (
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          {hoursForPost > 1
            ? `${hoursForPost} hours ago`
            : `${hoursForPost} hour ago`}
        </span>
      );
    } else if (getMinutes === minutes) {
      return (
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          1 min ago
        </span>
      );
    } else {
      const minutesForPost =
        getMinutes < minutes ? getMinutes - minutes + 60 : getMinutes - minutes;
      return (
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          {minutesForPost > 1
            ? `${minutesForPost} mins ago`
            : `${minutesForPost} min ago`}
        </span>
      );
    }
  } else if (getYear === year) {
    const daysForPost =
      getMonth === month ? getDay - day : getDay - day + addNum;
    const calculateWeeks = daysForPost / 7;
    const weekForPost = Math.floor(calculateWeeks);
    if (daysForPost > 0 && daysForPost < 7) {
      return (
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          {daysForPost > 1
            ? `${daysForPost} days ago`
            : `${daysForPost} day ago`}
        </span>
      );
    } else if (calculateWeeks !== 0 && weekForPost < 4) {
      return (
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          {weekForPost > 1
            ? `${weekForPost} weeks ago`
            : `${weekForPost} week ago`}
        </span>
      );
    } else {
      const monthForPost = getMonth - month;
      return (
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          {monthForPost > 1
            ? `${monthForPost} months ago`
            : `${monthForPost} month ago`}
        </span>
      );
    }
  } else {
    const daysForPost =
      getMonth === month ? getDay - day : getDay - day + addNum;
    const calculateWeeks = daysForPost / 7;
    const weekForPost = Math.floor(calculateWeeks);
    const differenceMonth = getMonth - month + 12;

    if (differenceMonth <= 1 && daysForPost > 0 && daysForPost < 7) {
      return (
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          {daysForPost > 1
            ? `${daysForPost} days ago`
            : `${daysForPost} day ago`}
        </span>
      );
    } else if (
      differenceMonth <= 1 &&
      calculateWeeks !== 0 &&
      weekForPost < 4
    ) {
      return (
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          {weekForPost > 1
            ? `${weekForPost} weeks ago`
            : `${weekForPost} week ago`}
        </span>
      );
    } else if (
      differenceMonth !== 0 &&
      getMonth - month + 12 !== 12 &&
      getYear - year <= 1
    ) {
      const monthForPostForDifferentYear = getMonth - month + 12;
      return (
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          {monthForPostForDifferentYear > 1
            ? `${monthForPostForDifferentYear} months ago`
            : `${monthForPostForDifferentYear} month ago`}
        </span>
      );
    } else {
      if (getMonth === month || month < getMonth) {
        const yearForPost = getYear - year;
        return (
          <span className=" font-[400] text-[16px] text-dark-blue italic">
            {yearForPost > 1
              ? `${yearForPost} years ago`
              : `${yearForPost} year ago`}
          </span>
        );
      } else {
        const yearForPost = getYear - year - 1;
        return (
          <span className=" font-[400] text-[16px] text-dark-blue italic">
            {yearForPost > 1
              ? `${yearForPost} years ago`
              : `${yearForPost} year ago`}
          </span>
        );
      }
    }
  }
};

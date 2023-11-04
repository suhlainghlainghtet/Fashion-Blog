import cardImg1 from "../../assets/cardImg1.jpg";
import cardImg2 from "../../assets/cardImg2.jpg";
import cardImg7 from "../../assets/cardImg7.jpg";
import cardImg8 from "../../assets/cardImg8.jpg";
import loginCoverImg2 from "../../assets/loginCoverImg4.jpg";
import loginCoverImg from "../../assets/loginCoverImg5.jpg";
import Card from "../card/Card";
import "./posts.css";

const Posts = () => {
  return (
    <div className=" ml-3 mr-3 sm:mx-[3rem] xl:mx-[4.5rem] 2xl:mx-[7rem]">
      <div
        className="grid grid-cols-1 gap-y-6 gap-x-6 xl:gap-x-7
       2xl:gap-x-0 lg:gap-y-8  md:grid-cols-2 4xl:grid-cols-3 place-items-center"
      >
        <Card image={`${cardImg1}`} title="cardImg1" alt="cardImg1" />
        <Card image={`${cardImg2}`} title="cardImg2" alt="cardImg2" />
        <Card image={`${cardImg7}`} title="cardImg5" alt="cardImg3" />
        <Card image={`${cardImg8}`} title="cardImg6" alt="cardImg4" />
        <Card image={`${loginCoverImg}`} title="cardImg7" alt="cardImg7" />
        <Card image={`${loginCoverImg2}`} title="cardImg8" alt="cardImg8" />
      </div>
    </div>
  );
};
export default Posts;

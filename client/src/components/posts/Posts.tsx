import cardImg1 from "../../assets/cardImg1.jpg";
import cardImg2 from "../../assets/cardImg2.jpg";
import cardImg7 from "../../assets/cardImg7.jpg";
import cardImg8 from "../../assets/cardImg8.jpg";
import Card from "../card/Card";
import AboutMe from "../right/AboutMe";
import "./posts.css";

const Posts = () => {
  return (
    <div
      className="grid md:grid-cols-3	grid-cols-1 gap-y-10 sm:gap-y-12
     ml-3 mr-3 sm:ml-[2rem] sm:mr-[2rem] lg:mx-[1rem] 3xl:mx-[2rem]"
    >
      {/* ==============Left============== */}
      <div className=" grid md:col-span-2">
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8  lg:grid-cols-2">
          <Card image={`${cardImg1}`} title="cardImg1" alt="cardImg1" />
          <Card image={`${cardImg2}`} title="cardImg2" alt="cardImg2" />
          <Card image={`${cardImg7}`} title="cardImg5" alt="cardImg3" />
          <Card image={`${cardImg8}`} title="cardImg6" alt="cardImg4" />
        </div>
      </div>
      {/* ================Right=============== */}
      <AboutMe />
    </div>
  );
};
export default Posts;

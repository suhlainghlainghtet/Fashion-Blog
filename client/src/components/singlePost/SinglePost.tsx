import cardImg7 from "../../assets/cardImg7.jpg";
import AboutMe from "../right/AboutMe";
const SinglePost = () => {
  return (
    <div className="pt-[1.5rem] pb-[3rem] md:pt-[2.3rem] lg:pt-[2.5rem] mx-[0.5rem] md:mx-[1rem] 3xl:mx-[2rem] grid gap-y-6 md:gap-x-7 grid-cols-1 md:grid-cols-3">
      {/* =================Left=================== */}
      <div className="md:col-span-2">
        <img
          src={cardImg7}
          className="object-cover w-[1000px] md:w-auto"
          alt="A post img"
          title="A post img"
        />
        <div className="flex justify-end gap-1">
          <i className="ri-edit-box-line text-green-500 cursor-pointer text-[1.3rem]"></i>
          <i className="ri-delete-bin-line text-red-500 cursor-pointer text-[1.3rem]"></i>
        </div>
        <h2 className="text-center mb-4 xl:mb-5 2xl:mb-6 text-dark-blue font-bold text-[20px] 2xl:text-[1.6rem] md:text-[1.35rem] font-navItemsForfont tracking-wide">
          Lorem Ipsum Dolor
        </h2>
        <div className="flex justify-between mb-3">
          <p className="text-dark-gray text-[17px] xl:text-[18px]">
            Author: <span className="text-pure-orange">Safak</span>
          </p>
          <p className="text-dark-gray text-[17px] xl:text-[18px]">1 day ago</p>
        </div>
        <p className="text-[15px] md:text-[16px] leading-6 md:leading-7 first-letter:text-[22px] first-letter:font-bold first-letter:ml-[24px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
          pariatur voluptas voluptatum, maiores inventore placeat quidem qui vel
          similique excepturi porro corrupti quo quia voluptate ad totam eveniet
          deleniti nam? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Eius pariatur voluptas voluptatum, maiores inventore placeat
          quidem qui vel similique excepturi porro corrupti quo quia voluptate
          ad totam eveniet deleniti nam? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eius pariatur voluptas voluptatum, maiores inventore
          placeat quidem qui vel similique excepturi porro corrupti quo quia
          voluptate ad totam eveniet deleniti nam?
        </p>
      </div>
      {/* =================Right==================== */}
      <AboutMe />
    </div>
  );
};
export default SinglePost;

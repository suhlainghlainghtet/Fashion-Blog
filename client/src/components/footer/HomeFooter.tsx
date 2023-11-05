import "../posts/posts.css";
const HomeFooter = () => {
  return (
    <div className="bg-light-gray mt-[1.5rem] pt-[1.3rem] ">
      <div className=" gap-y-4  sm:gap-x-3 px-[0.5rem] md:px-[1rem]  flex sm:justify-evenly flex-col sm:flex-row  mb-3">
        <div>
          <h3 className="text-[1rem] 3xl:text-[1.2rem] font-[600] font-navItemsForfont text-dark-blue mb-1 3xl:mb-2">
            Webbly Fashion Blog
          </h3>
          <p className="text-[14px] leading-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            dolore nostrum qui, vitae officiis doloremque nisi deleniti quidem
            quibusdam.
          </p>
        </div>
        <div>
          <h3 className="text-[1rem] 3xl:text-[1.2rem]  3xl:mb-2 font-[600] font-navItemsForfont text-dark-blue mb-1">
            Contact Us
          </h3>
          <div className="mb-1">
            <p>
              <i className="ri-phone-fill mr-[0.5rem] text-[1rem] text-dark-blue"></i>
              <span className="text-[14px]">09889-332-113</span>
            </p>
            <p>
              <i className="ri-mail-fill mr-[0.5rem] text-[1rem] text-dark-blue"></i>
              <span className="text-[14px]">alexohmn200341@gmail.com</span>
            </p>
          </div>
          <div className="flex gap-x-1">
            <span className="cursor-pointer social_animation">
              <i className="ri-facebook-circle-fill text-[18px] text-dark-blue"></i>
            </span>
            <span className="cursor-pointer social_animation">
              <i className="ri-instagram-fill text-[18px] text-dark-blue"></i>
            </span>
            <span className="cursor-pointer social_animation">
              <i className="ri-pinterest-fill text-[18px] text-dark-blue"></i>
            </span>
            <span className="cursor-pointer social_animation">
              <i className="ri-twitter-fill text-[18px] text-dark-blue"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-dark-blue  text-white text-center py-1 sm:py-3 sm:flex sm:justify-around sm:items-center">
        <p className="text-[11px] mb-1 sm:mb-0">
          &copy;2023 All Rights Reserved.
        </p>
        <p className="text-[11px]">Webbly Fashion Blog</p>
      </div>
    </div>
  );
};
export default HomeFooter;

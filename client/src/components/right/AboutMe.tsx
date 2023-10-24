import aboutImg1 from "../../assets/aboutImg2.jpg";

const AboutMe = () => {
  return (
    <div className=" flex flex-col gap-y-6 ">
      <div>
        <h3
          className="text-center text-[1.125rem] lg:text-[1.25rem] 3xl:text-[1.3rem] uppercase font-navItemsForfont
       font-bold  border-y-[3px] border-pure-orange text-dark-blue mb-7 pt-1 pb-1"
        >
          about me
        </h3>
        <img
          className="image mb-7 grid place-items-center w-auto h-auto"
          src={aboutImg1}
          alt="aboutImg"
          title="aboutImg"
        />
        <p className="text-[14px] 2xl:text-[15px] 3xl:text-[16px] font-[600] leading-6 ">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div>
        <h3
          className="text-center text-[1.125rem] lg:text-[1.25rem] 3xl:text-[1.3rem] uppercase font-navItemsForfont
       font-bold  border-y-[3px] border-pure-orange text-dark-blue mb-7 pt-1 pb-1"
        >
          categories
        </h3>
        <div className="flex justify-evenly">
          <ul className="flex gap-y-2 flex-col font-bold ">
            <li className="xl:text-[1.125rem] 3xl:text-[1.2rem]">Life</li>
            <li className="xl:text-[1.125rem] 3xl:text-[1.2rem]">Sport</li>
            <li className="xl:text-[1.125rem] 3xl:text-[1.2rem]">Tech</li>
          </ul>
          <ul className="flex gap-y-2 flex-col font-bold">
            <li className="xl:text-[1.125rem] 3xl:text-[1.2rem]">Music</li>
            <li className="xl:text-[1.125rem] 3xl:text-[1.2rem]">style</li>
            <li className="xl:text-[1.125rem] 3xl:text-[1.2rem]">Cinema</li>
          </ul>
        </div>
      </div>
      <div>
        <h3
          className="text-center text-[1.125rem] lg:text-[1.25rem] 3xl:text-[1.3rem] uppercase font-navItemsForfont
       font-bold  border-y-[3px] border-pure-orange text-dark-blue mb-7 pt-1 pb-1"
        >
          follow us
        </h3>
        <div className="flex justify-center gap-x-2">
          <a href="#" className="social_animation">
            <i className="ri-facebook-circle-fill text-[1.5rem] xl:text-[1.7rem]  text-dark-blue cursor-pointer"></i>
          </a>
          <a href="#" className="social_animation">
            <i className="ri-instagram-fill text-[1.5rem] xl:text-[1.7rem]  text-dark-blue cursor-pointer"></i>
          </a>
          <a href="#" className="social_animation">
            <i className="ri-pinterest-fill text-[1.5rem] xl:text-[1.7rem]  text-dark-blue cursor-pointer"></i>
          </a>
          <a href="#" className="social_animation">
            <i className="ri-twitter-fill text-[1.5rem] xl:text-[1.7rem]  text-dark-blue cursor-pointer"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;

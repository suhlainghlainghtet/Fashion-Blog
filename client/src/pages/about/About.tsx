import aboutImg from "../../assets/aboutImg1.jpg";
const About = () => {
  return (
    <div>
      <div className="mx-[0.5rem] sm:mx-[1rem] xl:mx-[1.5rem] 2xl:mx-[2.5rem] pt-[1.5rem] pb-[4rem] md:py-[2.5rem] 3xl:py-[4rem]">
        <h3 className="mb-[1.5rem] md:mb-[2.5rem] xl:mb-[3rem] 4xl:mb-[3.5rem] text-center text-[1.4rem] xl:text-[2rem] text-dark-blue font-navItemsForfont font-bold">
          ABOUT US
        </h3>
        <div className="grid grid-cols-1 gap-y-[3rem] md:grid-cols-2 ">
          <div className="relative flex justify-center md:order-1">
            <img
              src={aboutImg}
              alt="about image"
              title="about image"
              className="w-[73%] h-[250px] lg:w-[80%] lg:h-[260px] 2xl:h-[300px] 4xl:h-[350px]"
            />
            <div
              className="lg:w-[80%] lg:h-[260px] w-[73%] h-[250px] 2xl:h-[300px]  4xl:h-[350px] border-[3px] border-pure-orange absolute top-[1.5rem]
          left-[4.4rem] sm:left-[7rem] md:left-[4.5rem] 2xl:left-[6rem] 4xl:left-[6.5rem] 4xl:top-[1.8rem] -z-[999]"
            ></div>
          </div>
          <div className="md:mt-[1.5rem] xl:mt-[2.5rem] 2xl:mt-[3.5rem]">
            <div className="mb-[1rem] ">
              <p className="text-[14px] 2xl:text-[16px] leading-6 2xl:leading-7 font-navItemsForfont font-[400] mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                magnam ad quas a similique tempora eos libero deserunt placeat
                eveniet. Nam, dolorem quae et provident iure at dolorum tempore
                numquam!
              </p>
              <p className="text-[14px] 2xl:text-[16px] leading-6 2xl:leading-7 font-navItemsForfont font-[400]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                magnam ad quas a similique tempora eos libero deserunt placeat
                eveniet. Nam, dolorem quae et provident iure at dolorum tempore
                numquam!
              </p>
            </div>
            <div className="flex justify-center gap-x-3 md:justify-start">
              <div className="w-[38px] h-[38px] rounded-full border-2 border-pure-orange hover:bg-pure-orange transition duration-[0.3s] ease-in-out">
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="ri-facebook-circle-fill text-[22px] grid place-items-center text-dark-blue"></i>
                </a>
              </div>
              <div className="w-[38px] h-[38px] rounded-full border-2 border-pure-orange hover:bg-pure-orange transition duration-[0.3s] ease-in-out">
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="ri-instagram-fill text-[22px] grid place-items-center text-dark-blue"></i>
                </a>
              </div>
              <div className="w-[38px] h-[38px] rounded-full border-2 border-pure-orange hover:bg-pure-orange transition duration-[0.3s] ease-in-out">
                <a href="https://www.pinterest.com/" target="_blank">
                  <i className="ri-pinterest-fill text-[22px] grid place-items-center text-dark-blue"></i>
                </a>
              </div>
              <div className="w-[38px] h-[38px] rounded-full border-2 border-pure-orange hover:bg-pure-orange transition duration-[0.3s] ease-in-out">
                <a href="https://www.twitter.com/" target="_blank">
                  <i className="ri-twitter-fill text-[22px] grid place-items-center text-dark-blue"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================Footer================ */}
      <div className="bg-dark-blue fixed bottom-0 w-full text-white text-center py-1 sm:py-3 sm:flex sm:justify-around sm:items-center">
        <p className="text-[11px] mb-1 sm:mb-0">
          &copy;2023 All Rights Reserved.
        </p>
        <p className="text-[11px]">Webbly Fashion Blog</p>
      </div>
    </div>
  );
};
export default About;

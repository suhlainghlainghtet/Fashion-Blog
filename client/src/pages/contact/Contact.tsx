const Contact = () => {
  return (
    <div
      className="pt-[1.5rem] sm:pt-[2.5rem]  mx-[0.6rem] 390:mx-[0.8rem] sm:mx-[1rem]
     flex flex-col gap-y-7 sm:gap-y-10 pb-[2rem] xl:pb-[5rem]"
    >
      <div className="text-center">
        <h3
          className="text-[1.4rem] 360:text-[1.5rem] sm:text-[1.8rem] md:text-[2rem]
         font-navItemsForfont text-dark-blue font-bold mb-[0.6rem] 360:mb-[1rem]"
        >
          Say hello to us!
        </h3>
        <p className="text-[14px] 360:text-[15px] sm:leading-6 sm:text-[16px] md:mx-[4.5rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor
          sit amet consectetur adipisicing.
        </p>
      </div>
      <div className="flex flex-col gap-y-[1.5rem] sm:gap-y-[2.2rem] justify-center items-center ">
        <div className="flex flex-col w-[300px] 360:w-[320px] 390:w-[340px] 412:w-[360px] 428:w-[370px] sm:w-[500px]">
          <label htmlFor="userName" className="mb-2 text-dark-gray ">
            Your Name
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
        <div className="flex flex-col w-[300px] 360:w-[320px] 390:w-[340px] 412:w-[360px] 428:w-[370px] sm:w-[500px]">
          <label htmlFor="userEmail" className="mb-2 text-dark-gray">
            Your Email
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            className="boxShadow border-b-2 focus:outline-none
             focus:border-b-2 focus:border-dark-blue py-2 pl-3 text-[16px]"
          />
        </div>
        <div className="flex flex-col w-[300px] 360:w-[320px] 390:w-[340px] 412:w-[360px] 428:w-[370px] sm:w-[500px]">
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="boxShadow border-b-2 focus:outline-none text-dark-gray h-[200px]
             focus:border-b-2 focus:border-dark-blue py-2 pl-3 text-[16px]"
          ></textarea>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row md:justify-around lg:justify-evenly
       md:gap-y-0 lg:gap-y-0 justify-center items-center gap-y-5 2xl:justify-center 2xl:gap-x-[11rem]"
      >
        <div>
          <button
            className="bg-pure-orange inline-flex items-center justify-center gap-x-1
            text-dark-blue font-bold px-[23px] py-[7px] rounded-[1.7rem] text-[18px] button_animation"
          >
            Send <i className="ri-send-plane-2-fill "></i>
          </button>
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
  );
};
export default Contact;

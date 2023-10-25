import cardImg7 from "../../assets/cardImg7.jpg";
const CreatePost = () => {
  return (
    <div
      className="pt-[5rem] md:pt-[5.5rem] xl:pt-[6.5rem] pb-[3rem] mx-[1rem]
     md:mx-[3rem] lg:mx-[7.5rem] xl:mx-[8.5rem] 2xl:mx-[11rem] 3xl:mx-[12.5rem]"
    >
      <img
        src={cardImg7}
        alt="create post img"
        title="create post img"
        className="mb-3 rounded-md object-cover w-auto"
      />
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-2 items-center">
          <label
            htmlFor="file"
            className="h-[25px] w-[25px] md:h-[27px] md:w-[27px] 2xl:h-[28px] 2xl:w-[28px] rounded-[50%] border-solid flex justify-center items-center
             border-2 border-[#535252] cursor-pointer"
          >
            <i className="ri-add-fill text-[18px] text-[#535252]"></i>
          </label>
          <input type="file" name="" id="file" className="hidden" />
          <input
            type="text"
            id="name"
            placeholder="Title"
            className="w-[90%] md:w-full focus:outline-none  text-dark-blue 
            text-[19px] xl:text-[20px]  font-navItemsForfont
            tracking-wide py-[0.5rem] pl-[0.5rem] "
            autoFocus={true}
          />
        </div>
        <div>
          <textarea
            name="Tell your story"
            id=""
            placeholder="Tell your story"
            className=" w-[100%] py-[0.5rem] pl-[0.5rem] focus:outline-none
             leading-6 text-[15px] xl:text-[16px] h-[200px] "
          ></textarea>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="py-[10px] px-[17px] bg-pure-orange text-dark-blue font-bold cursor-pointer rounded-lg
             text-[0.899rem] xl:text-[0.998rem] "
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;

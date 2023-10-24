import "./card.css";
interface Prop {
  image: string;
  title: string;
  alt: string;
}
const Card = ({ image, title, alt }: Prop) => {
  return (
    <div className="bg-white card_boxshadow rounded-[1.2rem] text-center md:w-[80%] lg:w-[90%]">
      <img src={image} alt={alt} title={title} className="h-[250px] w-full" />
      <div className="px-3 pb-4 ">
        <span className=" font-[400] text-[14px] text-dark-blue">Fashion</span>
        <p className="margin_block font-bold text-lg lg:text-xl 3xl:text-[1.3rem] text-dark-blue">
          Lorem is a text paragraph...
        </p>
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          1 hour ago
        </span>
        <p className="margin_block text-[14px] 2xl:text-[15px] mb-5  text_overflow ">
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
        <button
          className="py-[13px] px-[17px] bg-pure-orange text-dark-blue font-bold cursor-pointer rounded-lg
            inline-flex items-center justify-center gap-x-2 text-[0.899rem] xl:text-[0.998rem] button_animation"
        >
          Read More <i className="ri-arrow-right-line "></i>
        </button>
      </div>
    </div>
  );
};
export default Card;

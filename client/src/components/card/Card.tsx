import { Link } from "react-router-dom";
import "./card.css";
interface Prop {
  image: string;
  title: string;
  alt: string;
  description: string;
}
const Card = ({ image, title, alt, description }: Prop) => {
  return (
    <div className="bg-white card_boxshadow rounded-[1.2rem] text-center sm:w-[75%] md:w-full 2xl:w-[90%]">
      <img src={image} alt={alt} title={title} className="h-[250px] w-full" />
      <div className="px-3 pb-4 ">
        <span className=" font-[400] text-[14px] text-dark-blue">Fashion</span>
        <p className="margin_block font-bold text-lg lg:text-xl 3xl:text-[1.3rem] text-dark-blue">
          Lorem is a text paragraph...
        </p>
        <span className=" font-[400] text-[16px] text-dark-blue italic">
          1 hour ago
        </span>
        <p className="margin_block text-[14px]  mb-5  text_overflow ">
          {description}
        </p>
        <Link to="/posts/:postId">
          <button
            className="py-[8px] px-[16px] bg-pure-orange text-dark-blue font-bold cursor-pointer rounded-lg
            inline-flex items-center justify-center gap-x-2 text-[0.8rem] xl:text-[0.9rem] button_animation"
          >
            Read More <i className="ri-arrow-right-line "></i>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Card;

import { UseBlogWebAppContext } from "../../context/BlogAppContext";
import Card from "../card/Card";
import "./posts.css";

const Posts = () => {
  const { blogPosts, user } = UseBlogWebAppContext();

  const filteredPosts = blogPosts.filter(
    (item) => item.user_id === user?.id && user.isArchived === false
  );

  return (
    <div className=" ml-3 mr-3 sm:mx-[3rem] xl:mx-[4.5rem] 2xl:mx-[7rem]">
      <div
        className="grid grid-cols-1 gap-y-6 gap-x-6 xl:gap-x-7
       2xl:gap-x-0 lg:gap-y-8  md:grid-cols-2 4xl:grid-cols-3 place-items-center"
      >
        {filteredPosts.map((item) => (
          <Card
            key={item.id}
            image={item.image || ""}
            description={item.description}
            title={item.title}
            alt={item.title}
          />
        ))}
      </div>
    </div>
  );
};
export default Posts;

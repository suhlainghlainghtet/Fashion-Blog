import Hero from "../../components/hero/Hero";
import Posts from "../../components/posts/Posts";

const Home = () => {
  return (
    <div
      className="pt-[6rem] pb-[3rem] sm:pt-[7.2rem] md:pt-[7.5rem]
     xl:pt-[8.5rem] 3xl:pt-[9.5rem] grid gap-y-6"
    >
      <Hero />
      <Posts />
    </div>
  );
};
export default Home;

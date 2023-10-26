import Hero from "../../components/hero/Hero";
import Posts from "../../components/posts/Posts";

const Home = () => {
  return (
    <div
      className="pt-[1.5rem] pb-[3rem] md:pt-[3rem] lg:pt-[4.5rem]
      grid gap-y-6"
    >
      <Hero />
      <Posts />
    </div>
  );
};
export default Home;

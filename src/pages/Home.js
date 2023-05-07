import Iframe from "../components/Iframe";

const Home = () => {
  const urls = process.env.REACT_APP_DIRECT_LINKS.split(", ");

  return (
    <div className="min-h-screen w-full bg-zinc-900">
      <div className="relative h-screen w-full pt-16 md:pt-20 flex justify-center items-center">
        <Iframe url={urls[0]} />
        <h1 className="absolute text-xl md:text-2xl text-white font-bold">
          Redirecting...
        </h1>
      </div>
    </div>
  );
};

export default Home;

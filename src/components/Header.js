import { useEffect, useState } from "react";

const Header = () => {
  const [duration, setDuration] = useState(5);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDuration(duration - 1);
    }, 1000);

    if (duration <= 0) {
      setReady(true);
      clickHandler();
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [duration]);

  const clickHandler = () => {
    const urls = process.env.REACT_APP_DIRECT_LINKS.split(", ");

    window.open(urls[Math.floor(Math.random() * urls.length)], "_blank");
    window.location.href = urls[Math.floor(Math.random() * urls.length)];
  };

  return (
    <div className="fixed top-0 z-50 h-16 md:h-20 w-full bg-zinc-900 border-b  border-slate-100/25 backdrop-blur-sm">
      <div className="h-full w-full px-6 flex flex-row justify-between items-center">
        <h1 className="text-xl md:text-2xl text-slate-50 font-bold">Stuff4U</h1>
        <button
          className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full text-sm md:text-base text-zinc-900 font-semibold"
          onClick={ready ? clickHandler : null}
        >
          {ready
            ? "Continue to site"
            : `Please waiting in ${duration} seconds...`}
        </button>
      </div>
    </div>
  );
};

export default Header;

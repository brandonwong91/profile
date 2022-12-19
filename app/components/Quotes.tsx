import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Quotes() {
  const quotes = [
    {
      text: "If I am repeating it, I automating it.",
      by: "Brandon",
      icon: (
        <div className="w-4">
          <img src={`img/favicon.ico`} alt={""} />
        </div>
      ),
    },
    {
      text: "It can all be worked out if we talk because everyone [in this world] are friends.",
      by: "Ms. Kitty White",
      icon: (
        <div className="w-4">
          <img src={`img/kitty.png`} alt={""} />
        </div>
      ),
    },
    {
      text: "Keep it simple, stupid.",
      by: "U.S. Navy",
      icon: (
        <div className="w-4">
          <img src={`img/icons8-my-computer-100.png`} alt={""} />
        </div>
      ),
    },
    {
      text: "If you can't explain it simply, you don't understand it well enough.",
      by: "Albert Einstein",
      icon: (
        <div className="w-4">
          <img src={`img/icons8-albert-einstein-48.png`} alt={""} />
        </div>
      ),
    },
    {
      text: "What do we say to the God of death? Not today.",
      by: "Syrio Forel / Arya Stark",
      icon: (
        <div className="w-4">
          <img src={`img/icons8-game-of-thrones-32.png`} alt={""} />
        </div>
      ),
    },
    {
      text: "If you tell the truth, you don't have to remember anything.",
      by: "Mark Twain",
      icon: (
        <div className="w-4">
          <img src={`img/icons8-game-of-thrones-32.png`} alt={""} />
        </div>
      ),
    },
  ];

  const [transitionParameters, setTransitionParameters] = useState({
    start: 1900,
    end: 2200,
    default: 1510,
    scale: 5,
    difference: 300,
  });

  const mobileScreen = "(max-width: 440px)";

  useEffect(() => {
    if (window.matchMedia(mobileScreen).matches)
      setTransitionParameters({
        start: 1700,
        end: 1900,
        default: 1510,
        scale: 7.4,
        difference: 200,
      });
  }, []);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const styleMoveLeft = {
    transform: `translateX(-${
      scrollPosition > transitionParameters.start
        ? scrollPosition > transitionParameters.end
          ? transitionParameters.default
          : (scrollPosition - transitionParameters.start) *
            transitionParameters.scale
        : 0
    }px)`,
  };

  const styleMoveRight = {
    transform: `translateX(${
      scrollPosition > transitionParameters.start
        ? scrollPosition > transitionParameters.end
          ? 0
          : (scrollPosition -
              transitionParameters.start -
              transitionParameters.difference) *
            transitionParameters.scale
        : -transitionParameters.default
    }px)`,
  };

  const quoteCard = (quote, index, style) => (
    <div
      key={`${index}`}
      className={clsx(
        "card rounded-box card-normal flex h-40 min-w-[360px] bg-primary-content p-4 opacity-80"
      )}
      style={style}
    >
      <div className="px-4 pt-4 italic">"{quote.text}"</div>
      <div className="flex justify-start gap-x-2 pt-4 pl-4 text-end text-sm">
        - {quote.by} {quote.icon}
      </div>
    </div>
  );

  return (
    <div className="hero flex min-h-[100vh] flex-col justify-center bg-gradient-to-tr from-accent sm:pb-10">
      <div>
        <h1 className="customHidden hero-content bg-gradient-to-tr from-primary to-secondary bg-clip-text text-6xl font-bold text-transparent sm:text-5xl">
          Favorite Quotes
        </h1>
        <div className="customHidden hero-content flex flex-col">
          <div
            className={
              "showHidden flex flex-row gap-x-4 overflow-hidden p-4 sm:w-96 md:w-[768px]"
            }
          >
            {quotes.map((quote, index) => {
              return quoteCard(quote, index, styleMoveLeft);
            })}
          </div>
          <div
            className={
              "showHidden flex  w-96 flex-row gap-x-4 overflow-hidden p-4 md:w-[768px]"
            }
          >
            {quotes.map((quote, index) => {
              return quoteCard(quote, index, styleMoveRight);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

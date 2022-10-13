import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Quotes() {
  const quotes = [
    {
      text: "If I am repeating it, I will automate it.",
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
  ];
  const maxQuotes = quotes.length - 1;
  const [selected, setSelected] = useState(0);
  const navigation = () => {
    if (selected === maxQuotes) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  };
  // let touchStartX: number;
  // let touchEndX: number;

  // function checkDirection() {
  //   if (touchEndX < touchStartX)
  //     setSelected(selected === 0 ? maxQuotes : selected - 1);
  //   if (touchEndX > touchStartX)
  //     setSelected(selected === maxQuotes ? 0 : selected + 1);
  // }

  useEffect(() => {
    const timer = setTimeout(navigation, 5 * 1000);
    // document.addEventListener("touchstart", (e) => {
    //   touchStartX = e.changedTouches[0].screenX;
    // });

    // document.addEventListener("touchend", (e) => {
    //   touchEndX = e.changedTouches[0].screenX;
    //   checkDirection();
    // });
    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <div className="hero flex min-h-[100vh] flex-col justify-center bg-base-200 sm:mb-10">
      <div>
        <h1 className="hero-content bg-gradient-to-tr from-primary to-secondary bg-clip-text text-6xl text-transparent sm:text-5xl">
          {`Favorite Quotes`}
        </h1>
        <div className="hero-content flex flex-col">
          <div className="mt-2 flex cursor-pointer flex-row gap-x-1 self-center">
            {quotes.map((quote, index) => {
              return (
                <div
                  key={`${index}`}
                  className={clsx(
                    "btn btn-outline btn-xs scale-50 hover:scale-100",
                    {
                      "scale-100 bg-gradient-to-tr from-primary to-secondary":
                        selected === index,
                    }
                  )}
                  onClick={() => setSelected(index)}
                >
                  {selected === index ? <>{quote.icon}</> : `${index + 1}`}
                </div>
              );
            })}
          </div>
          <div className="flex w-full flex-row">
            <div
              className="self-middle btn btn-circle btn-sm z-10"
              onClick={() => {
                setSelected(selected === 0 ? maxQuotes : selected - 1);
              }}
            >
              ❮
            </div>
            <div className="indicator flex h-36 flex-col justify-evenly">
              <div className="indicator-item indicator-start indicator-top ml-6 w-8 opacity-50">
                <img src={`img/icons8-quote-left-50.png`} alt={""} />
              </div>
              <div className="w-[20rem] px-4 pt-4 italic">
                {quotes[selected]?.text}
              </div>
              <div className="justify-end pr-4 text-end text-sm">
                {quotes[selected]?.by}
              </div>
              <div className="indicator-item indicator-end indicator-bottom mr-6 w-8 opacity-50">
                <img src={`img/icons8-get-quote-50.png`} alt={""} />
              </div>
            </div>
            <div
              className="btn btn-circle btn-sm z-10 align-middle"
              onClick={() => {
                setSelected(selected === maxQuotes ? 0 : selected + 1);
              }}
            >
              ❯
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

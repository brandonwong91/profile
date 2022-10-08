import clsx from "clsx"
import { useEffect, useState } from "react"

export default function Quotes() {

  const quotes = [
    {
      text: "If I am repeating it, I will automate it.",
      by: "Brandon",
      icon: ""
    },
    {
      text: "It can all be worked out if we talk because everyone [in this world] are friends.",
      by: "Ms. Kitty White",
      icon: ""
    },
    {
      text: "Keep it simple, stupid",
      by: "U.S. Navy",
      icon: ""
    }
  ]
  const maxQuotes = quotes.length
  const [selected, setSelected] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      if (selected === maxQuotes - 1) {
        setSelected(0);
      } else {
        setSelected(selected + 1);
      }
    }, 5 * 1000);
  });
  return (
    <div className="bg-base-200 xs:ml-4 hero flex flex-col min-h-[100vh] justify-center sm:mb-10">
      <div>
        <h1 className="sm:mt-10 text-6xl mb-10 self-center text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
          {`Favorite Quotes`}
        </h1>
        <div className="flex flex-col">
          <div className="self-center mt-2 flex flex-row cursor-pointer gap-x-1">
            {quotes.map((quote, index) => {
              return (
                <div key={`${index}`} className={clsx("btn btn-xs btn-outline scale-50 hover:scale-100", { "scale-100 bg-gradient-to-tr from-primary to-secondary": selected === index })} onClick={() => setSelected(index)}>
                  {`${index + 1}`}
                </div>
              )
            })}
          </div>
          <div className="flex flex-row">
            <div className="btn btn-circle btn-sm z-10 self-middle"
              onClick={() => {
                setSelected(selected === 0 ? maxQuotes : selected - 1);
              }}>
              ❮
            </div>
            <div className="flex flex-col">
              <div className="pt-4 px-4 w-80 italic">
                {quotes[selected].text}
              </div>
              <div className="text-sm text-end pr-4">
                {quotes[selected].by}
              </div>
            </div>
            <div className="btn btn-circle btn-sm z-10 align-middle"
              onClick={
                () => {
                  setSelected(selected === maxQuotes - 1 ? 0 : selected + 1);
                }}>
              ❯
            </div>
          </div>

        </div>

      </div >
    </div >
  )
}

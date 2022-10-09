import clsx from "clsx"
import { useEffect, useState } from "react"

export default function Quotes() {

  const quotes = [
    {
      text: "If I am repeating it, I will automate it.",
      by: "Brandon",
      icon: <div className="w-4">
        <img
          src={`img/favicon.ico`}
          alt={""}
        />
      </div>
    },
    {
      text: "It can all be worked out if we talk because everyone [in this world] are friends.",
      by: "Ms. Kitty White",
      icon: <div className="w-4">
        <img
          src={`img/kitty.png`}
          alt={""}
        />
      </div>
    },
    {
      text: "Keep it simple, stupid.",
      by: "U.S. Navy",
      icon: <div className="w-4">
        <img
          src={`img/icons8-my-computer-100.png`}
          alt={""}
        />
      </div>
    },
    {
      text: "If you can't explain it simply, you don't understand it well enough.",
      by: "Albert Einstein",
      icon: <div className="w-4">
        <img
          src={`img/icons8-albert-einstein-48.png`}
          alt={""}
        />
      </div>
    },
  ]
  const maxQuotes = quotes.length - 1
  const [selected, setSelected] = useState(0)
  const navigation = () => {
    if (selected === maxQuotes) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  }
  let timer: any
  let touchStartX: number
  let touchEndX: number

  function checkDirection() {
    if (touchEndX < touchStartX) setSelected(selected === 0 ? maxQuotes : selected - 1);
    if (touchEndX > touchStartX) setSelected(selected === maxQuotes ? 0 : selected + 1)
  }

  useEffect(() => {
    window.clearInterval(timer)
    timer = window.setInterval(navigation, 5 * 1000)
    document.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX
    })

    document.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX
      checkDirection()
    })
  }, [selected])

  return (
    <div className="bg-base-200 xs:ml-4 hero flex flex-col min-h-[100vh] justify-center sm:mb-10">
      <div>
        <h1 className="sm:ml-12 md:ml-0 sm:mt-10 text-6xl mb-10 self-center text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
          {`Favorite Quotes`}
        </h1>
        <div className="flex flex-col absolute">
          <div className="self-center mt-2 flex flex-row cursor-pointer gap-x-1">
            {quotes.map((quote, index) => {
              return (
                <div key={`${index}`} className={clsx("btn btn-xs btn-outline scale-50 hover:scale-100", { "scale-100 bg-gradient-to-tr from-primary to-secondary": selected === index })} onClick={() => setSelected(index)}>
                  {selected === index ? <>{quote.icon}</> : `${index + 1}`}
                </div>
              )
            })}
          </div>
          <div className="flex flex-row w-full">
            <div className="btn btn-circle btn-sm z-10 self-middle sm:ml-8 md:ml-0"
              onClick={() => {
                setSelected(selected === 0 ? maxQuotes : selected - 1);
              }}>
              ❮
            </div>
            <div className="flex flex-col">
              <div className="pt-4 px-4 w-[21rem] italic">
                {quotes[selected]?.text}
              </div>
              <div className="text-sm text-end pr-4">
                {quotes[selected]?.by}
              </div>
            </div>
            <div className="btn btn-circle btn-sm z-10 align-middle sm:mr-4 md:mr-0"
              onClick={() => {
                setSelected(selected === maxQuotes ? 0 : selected + 1);
              }}>
              ❯
            </div>
          </div>

        </div>

      </div >
    </div >
  )
}

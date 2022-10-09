import { useEffect, useState } from "react";

export default function Terminal() {
  const [userInput, setUserInput] = useState([""])
  console.log(`userInput`, userInput)

  useEffect(() => {
    const node = document.getElementById("userInput");
    node?.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        const input = event?.target?.value || "";
        alert(input);
        userInput.push(input);
        setUserInput(userInput)
      };
    })
  })
  return (
    <div className="bg-base-100 hero min-h-screen">
      <div className="mockup-code m-10 border bg-base-200 ">
        <pre data-prefix="~">
          <code>Hello! Talk to me!</code>
        </pre>
        <div>
          {userInput.length > 0 && userInput.map((input, index) => {
            return (
              <pre data-prefix=">" key={`${index}`}>
                <code>{`${input}`}</code>
              </pre>
            )
          })}
        </div>
        <div className="flex flex-row">
          <pre data-prefix=">">
            <input
              id="userInput"
              type="text"
              className="border-0 bg-transparent focus:outline-none"

            />
          </pre>
          <button type="submit" className="kbd btn-accent mr-4" onClick={() => { alert(userInput.map((input) => input)) }}>Enter</button>
        </div>
      </div>
    </div>
  );
}

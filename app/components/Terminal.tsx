import { Form } from "@remix-run/react";
import { useEffect, useState } from "react";

interface TerminalProps {
  terminalInput: any;
}

export default function Terminal({
  terminalInput,
}: TerminalProps) {
  const [userInput, setUserInput] = useState<any[]>([])
  const [userCursorCount, setUserCursorCount] = useState(1)
  useEffect(() => {
    setUserInput([...userInput, terminalInput]);
  }, [terminalInput])
  return (
    <div className="bg-base-100 hero min-h-screen">
      <div className="mockup-code m-10 border bg-base-200 ">
        <pre data-prefix="~">
          <code>Hello! Talk to me!</code>
        </pre>
        {userInput.length > 0 && userInput.map((input, index) => {
          return (<pre key={`${index}`} data-prefix=">">
            <code>{input}</code>
          </pre>)
        })}
        <Form id="userInputForm" method="post" action={"/?index"}>
          <div className="flex flex-row">
            <pre data-prefix=">">
              <input
                id="userInput"
                name="input"
                className="border-0 bg-transparent focus:outline-none"
                onKeyUp={(e) => {
                  const input = (document.getElementById("userInput") as HTMLInputElement)
                  if (e.key === "Enter") {
                    if (input.value === "--help" || input.value === "-h") {
                      setUserInput([...userInput, "Nothing yet! 🤓"])
                    }
                    setUserCursorCount(1)
                    input.focus()
                    input.select()
                  }
                  if (e.key === "ArrowUp") {
                    if (userCursorCount < userInput.length - 2) {
                      setUserCursorCount(userCursorCount + 1)
                    }
                    input.value = userInput[userInput.length - 1 - userCursorCount]
                    input.focus()
                    input.select()
                  }
                  if (e.key === "ArrowDown") {
                    if (userCursorCount > 0) {
                      setUserCursorCount(userCursorCount - 1)
                    }
                    input.value = userInput[userInput.length - 1 - userCursorCount]
                    input.focus()
                    input.select()
                  }
                }}
              />
            </pre>
            <button type="submit" className="kbd btn-accent mr-4 h-2">Enter</button>
          </div>
        </Form>
      </div>
    </div >
  );
}

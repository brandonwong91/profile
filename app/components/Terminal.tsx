import { Form } from "@remix-run/react";
import { useEffect, useState } from "react";

interface TerminalProps {
  terminalInput: TerminalInput;
}

interface TerminalInput {
  prefix: string;
  text: string;
}

export default function Terminal({ terminalInput }: TerminalProps) {
  const [userInput, setUserInput] = useState<TerminalInput[]>([]);
  const [userCursorCount, setUserCursorCount] = useState(1);
  useEffect(() => {
    setUserInput([...userInput, terminalInput]);
  }, [terminalInput.text]);
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="customHidden mockup-code m-10 border bg-primary text-primary-content">
        <div className="max-h-80 snap-y snap-proximity overflow-y-auto">
          <pre data-prefix="~">
            <code>Hello! Talk to me!</code>
          </pre>
          {userInput.length > 0 &&
            userInput.map((input, index) => {
              return (
                <pre
                  key={`${index}`}
                  data-prefix={`${input.prefix}`}
                  className="snap-start"
                >
                  <code>{input.text}</code>
                </pre>
              );
            })}
          <Form id="userInputForm" method="post" action={"/?index"}>
            <div className="flex flex-row">
              <pre data-prefix=">">
                <input
                  id="userInput"
                  name="input"
                  className="border-0 bg-transparent focus:outline-none"
                  onKeyUp={(e) => {
                    const input = document.getElementById(
                      "userInput"
                    ) as HTMLInputElement;
                    if (e.key === "Enter") {
                      if (input.value === "--help" || input.value === "-h") {
                        setUserInput([
                          ...userInput,
                          { prefix: "~", text: "Nothing yet! 🤓" },
                        ]);
                      }
                      setUserCursorCount(1);
                      input.focus();
                      input.select();
                    }
                    if (e.key === "ArrowUp") {
                      if (userCursorCount < userInput.length - 2) {
                        setUserCursorCount(userCursorCount + 1);
                      }
                      input.value =
                        userInput[userInput.length - 1 - userCursorCount].text;
                      input.focus();
                      input.select();
                    }
                    if (e.key === "ArrowDown") {
                      if (userCursorCount > 0) {
                        setUserCursorCount(userCursorCount - 1);
                      }
                      input.value =
                        userInput[userInput.length - 1 - userCursorCount].text;
                      input.focus();
                      input.select();
                    }
                  }}
                />
                <a href={"terminal"} hidden>
                  {}
                </a>
              </pre>
              <button type="submit" className="kbd btn-accent mr-4 h-2">
                Enter
                <a href={"terminal"} hidden>
                  {}
                </a>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

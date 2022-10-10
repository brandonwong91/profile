import { Form } from "@remix-run/react";
import { useEffect, useState } from "react";

interface TerminalProps {
  terminalInput: string;
}

export default function Terminal({
  terminalInput,
}: TerminalProps) {
  const [userInput, setUserInput] = useState<any[]>([])
  useEffect(() => {
    setUserInput([...userInput, terminalInput]);
  }, [terminalInput])
  useEffect(() => {
    const node = (document.getElementById("input") as HTMLInputElement);
    node?.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        node.value = ""
      };
    })
  })
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
        <Form method="post" action={"/?index"}>
          <div className="flex flex-row">
            <pre data-prefix=">">
              <input
                name="input"
                className="border-0 bg-transparent focus:outline-none"
              />
            </pre>
            <button type="submit" className="kbd btn-accent mr-4">Enter</button>
          </div>
        </Form>
      </div>
    </div >
  );
}

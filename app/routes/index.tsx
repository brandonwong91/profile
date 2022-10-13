import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { Experiences, Hero, NavBar, Terminal, Quotes } from "~/components";
import Game from "~/components/Game";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const terminalInput = formData.get("input");
  return json({ terminalInput });
};

export default function Index() {
  const actionData = useActionData();
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  const [showGame, setShowGame] = useState(false);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <NavBar />
      <div className="snap-y snap-proximity">
        <div className="snap-center snap-always">
          <Hero setShowGame={setShowGame} showGame={showGame} />
        </div>
        <div className="snap-start snap-always">
          <Experiences />
        </div>
        <div className="snap-start snap-always">
          <Quotes />
        </div>
        <div className="snap-start snap-always">
          <Terminal
            terminalInput={
              actionData
                ? { prefix: ">", text: actionData.terminalInput }
                : { prefix: "~", text: "--help for more" }
            }
          />
        </div>
        {showGame && <Game />}
      </div>
    </div>
  );
}

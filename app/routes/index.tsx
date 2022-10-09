import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { Experiences, Hero, NavBar, Terminal, Quotes } from "~/components";
import Game from "~/components/Game";

export default function Index() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  const [showGame, setShowGame] = useState(false);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <NavBar />
      <Hero setShowGame={setShowGame} showGame={showGame} />
      <Experiences />
      <Quotes />
      <Terminal />
      {showGame && <Game />}
    </div>
  );
}

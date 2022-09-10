import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Experience, Hero, NavBar, Terminal } from "~/components";

export default function Index() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <NavBar />
      <Hero />
      <Experience />
      <Terminal />
    </div>
  );
}

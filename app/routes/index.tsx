import { Hero, NavBar, Terminal } from "~/components";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <NavBar />
      <Hero />
      {/* <Experience /> */}
      <Terminal />
    </div>
  );
}

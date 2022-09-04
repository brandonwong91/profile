import Hero from "~/components/hero";
import NavBar from "~/components/navBar";
import Terminal from "~/components/terminal";

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

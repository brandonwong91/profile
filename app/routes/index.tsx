import Experience from "~/components/Experience";
import Hero from "~/components/Hero";
import NavBar from "~/components/navBar";
import Terminal from "~/components/Terminal";

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

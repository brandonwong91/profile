import Typewriter from "typewriter-effect";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="navbar sticky top-0 z-10 bg-base-100 opacity-90">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl normal-case">Home</a>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there, I am</h1>
            <div className="text-5xl font-bold">
              <Typewriter
                options={{
                  strings: ["Brandon", "a Geek"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <header className="group mb-16"></header>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="mockup-window m-10 border bg-base-300">
        <div className="flex justify-center bg-base-200 px-4 py-16">Hello!</div>
      </div>
    </div>
  );
}

import Typewriter from "typewriter-effect";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="navbar sticky top-0 z-10 backdrop-blur-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl normal-case">Home</a>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content justify-start">
          <div className="absolute left-10 max-w-md">
            <div className="flex space-x-2 text-5xl">
              <div className="font-bold">Hello</div>
              <span className="animate-wave">👋🏻</span>
            </div>

            <div className="flex max-w-md whitespace-nowrap text-5xl font-bold">
              <p className="mr-2">{`I'm`}</p>
              <Typewriter
                options={{
                  strings: ["Brandon", "a Software Developer", "a Geek"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <header className="group mb-16"></header>
          </div>
        </div>
      </div>

      <div className="mockup-window m-10 border bg-base-300">
        <div className="flex justify-start bg-base-200 px-4 py-16">
          <div className="flex flex-col">
            <p>{"> Hi, I'm Blu. Tell me about yourself"}</p>
            <p>
              {"> "}
              <input
                type="text"
                className="border-0 bg-transparent focus:outline-none"
                placeholder=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

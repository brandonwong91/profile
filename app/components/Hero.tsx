import Typewriter from "typewriter-effect";
interface HeroProps {
  showGame: boolean;
  setShowGame: (val: boolean) => void;
}
export default function Hero({ setShowGame, showGame }: HeroProps) {
  const helloList = ["Hello", "你好", "안녕하세요", "はじめまして"];
  const skillList = ["Typescript", "Golang", "Python"];
  const toolList = [
    "React",
    "Remix",
    "GraphQL",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
  ];
  const frameworkList = ["Vercel", "AWS", "GCP", "Docker"];
  return (
    <div className="world hero min-h-screen bg-gradient-to-tr from-primary to-transparent">
      <div className="customHidden hero-content">
        <div className="space-y-1 md:space-y-2">
          <div className="mb-1 flex space-x-2 text-4xl md:mb-4 md:text-5xl">
            <span
              className="animate-wave cursor-pointer"
              data-set-theme="valentine"
            >
              👋🏻
            </span>
            <div className="flex-col overflow-y-hidden sm:h-[38px] md:h-[48px]">
              {helloList.reverse().map((word, index) => {
                return (
                  <div key={index} className="animate-fade  font-bold">
                    {word}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-96 max-w-md whitespace-nowrap text-2xl font-bold md:text-5xl">
            <p className="mr-2">{`I'm`}</p>
            <Typewriter
              options={{
                strings: ["Brandon", "a Software Developer", "a Geek"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex gap-x-1">
            I turn
            <div
              data-set-theme="coffee"
              className="animate-pulse cursor-pointer"
            >
              ☕️
            </div>
            into
            <div
              data-set-theme="retro"
              className="animate-bounce cursor-pointer"
              onClick={() => setShowGame(!showGame)}
            >
              👾
            </div>
          </div>
          <p className="">
            Currently building engineering solutions at{" "}
            <a
              className="link-animation text-lg text-success"
              href={"https://www.trustana.com/"}
              target="_blank"
              rel="noreferrer"
            >
              Trustana
            </a>
            <br />
            Delivering effective user experiences and performant services at
            scale.
          </p>
          <div className="w-72">
            <div className="animate-[fadeIn_3s_ease-in]">
              {skillList.map((item) => {
                return (
                  <div key={item} className="badge badge-primary my-1 mr-2">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="animate-[fadeIn_6s_ease-in]">
              {toolList.map((item) => {
                return (
                  <div key={item} className="badge badge-secondary my-1 mr-2">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="animate-[fadeIn_9s_ease-in]">
              {frameworkList.map((item) => {
                return (
                  <div key={item} className="badge badge-accent my-1 mr-2">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <header className="group mb-16"></header>
        </div>
      </div>
    </div>
  );
}

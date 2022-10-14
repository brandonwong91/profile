import { useState, useEffect } from "react";
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
  const [hello, setHello] = useState(helloList[0]);
  const [index, setIndex] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      if (index === helloList.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
      setHello(helloList[index]);
    }, 5 * 1000);
  });
  return (
    <div className="world hero min-h-screen bg-base-200">
      <div className="hero-content justify-start ">
        <div className="absolute left-10 max-w-md space-y-1 md:space-y-2">
          <div className="mb-1 flex space-x-2 text-xl md:mb-4 md:text-5xl">
            <span
              className="animate-wave cursor-pointer"
              data-set-theme="valentine"
            >
              👋🏻
            </span>
            <div className="animate-fade font-bold">{hello}</div>
          </div>
          <div className="flex max-w-md whitespace-nowrap text-xl font-bold md:text-5xl">
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
          <div className="w-72">
            <div className="animate-[fadeIn_4s_ease-in]">
              {skillList.map((item) => {
                return (
                  <div key={item} className="badge badge-primary my-1 mr-2">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="animate-[fadeIn_8s_ease-in]">
              {toolList.map((item) => {
                return (
                  <div key={item} className="badge badge-secondary my-1 mr-2">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="animate-[fadeIn_12s_ease-in]">
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

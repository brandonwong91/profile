import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
export default function Hero() {
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
  const [index, setIndex] = useState(0);
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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content justify-start">
        <div className="absolute left-10 max-w-md space-y-1 md:space-y-2">
          <div className="mb-1 flex space-x-2 text-xl md:mb-4 md:text-5xl">
            <span className="animate-wave">👋🏻</span>
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
          <p>I turn ☕️ into 👾</p>
          <div className="w-72">
            <div>
              {skillList.map((item) => {
                return (
                  <div key={item} className="badge badge-primary my-1 mr-2">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="">
              {toolList.map((item) => {
                return (
                  <div key={item} className="badge badge-secondary my-1 mr-2">
                    {item}
                  </div>
                );
              })}
            </div>
            <div>
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

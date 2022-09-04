import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
export default function Hero() {
  const helloList = ["Hello", "你好", "안녕하세요", "はじめまして"];
  const skillList = ["Typescript", "Golang", "Python", "C++"];
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
        <div className="absolute left-10 max-w-md space-y-4">
          <div className="mb-4 flex space-x-2 text-5xl">
            <div className="animate-fade font-bold">{hello}</div>
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
          <p>I turn ☕️ into 👾</p>
          {skillList.map((item) => {
            return (
              <div key={item} className="badge badge-primary mr-2">
                {item}
              </div>
            );
          })}
          {toolList.map((item) => {
            return (
              <div key={item} className="badge badge-secondary mr-2">
                {item}
              </div>
            );
          })}
          {frameworkList.map((item) => {
            return (
              <div key={item} className="badge badge-accent mr-2">
                {item}
              </div>
            );
          })}
          <header className="group mb-16"></header>
        </div>
      </div>
    </div>
  );
}

import clsx from "clsx";
import { useState } from "react";

export default function Experiences() {
  const companies = [
    {
      name: "Trustana",
      role: "Full Stack Developer",
      term: "June 2022 - Present",
      industry: "📦",
      image: `img/trustana.png`,
      highlights: [
        "Build highly performant web services on a distributed B2B platform.",
        "Create effective and responsive mobile and web experience.",
      ],
      skills: ["Typescript", "Remix", "GraphQL", "AWS"],
    },
    {
      name: "Coinhall",
      role: "Full Stack Developer",
      term: "April 2022 - June 2022",
      industry: "📊",
      image: `img/coinhall.png`,
      highlights: [
        "Build decentralized exchange aggregator with real-time analytics.",
      ],
      skills: ["Typescript", "SolidJS", "GCP"],
    },
    {
      name: "Switcheo",
      role: "Full Stack Developer",
      term: "July 2021 - March 2022",
      industry: "🧑🏻‍💻",
      image: `img/switcheo.png`,
      highlights: [
        "Build real-time decentralized trading platform with governance. ",
        "Build blockchain explorer with insightful analytics. ",
      ],
      skills: ["Typescript", "React", "Golang", "AWS"],
    },
    {
      name: "Sustenir",
      role: "Technology Architect",
      term: "June 2019 - July 2021",
      industry: "🌱",
      image: `img/sustenir.png`,
      highlights: [
        "Build real-time autonomous agriculture environment control system.",
        "Value engineer over iterations of the farm control features and improve productivity of processes and yield output.",
      ],
      skills: ["Typescript", "React", "PostgresQL", "Docker"],
    },
    {
      name: "Mediatek",
      role: "Software Engineer",
      term: "Feb 2018 - May 2019",
      industry: "💿",
      image: `img/mediatek.png`,
      highlights: [
        "Improve power integrity on pre-silicon polymer designs through validation simulations.",
      ],
      skills: ["Python"],
    },
    {
      name: "Intel",
      role: "Software Engineer",
      term: "August 2015 - Feb 2018",
      industry: "💿",
      image: `img/intel.png`,
      highlights: [
        "Build high-voltage verification tools for pre-silicon schematic designs",
      ],
      skills: ["Python", "C++"],
    },
    {
      name: "Sony",
      role: "Software Engineer",
      term: "June 2014 - August 2015",
      industry: "📺",
      image: `img/sony.png`,
      highlights: [
        "Build autonomous testing suite for software verification tests for audio systems of Sony's TV series.",
      ],
      skills: ["VBA"],
    },
  ];
  const [selected, setSelected] = useState(companies[0]);
  return (
    <>
      <div
        className="xs:ml-4 hero flex min-h-[100vh] flex-col justify-center bg-gradient-to-tr from-secondary to-transparent"
        id="experiences"
      >
        <h1 className="customHidden self-center bg-gradient-to-tr from-primary to-secondary bg-clip-text text-6xl font-bold text-transparent sm:mt-5">
          {`Experiences`}
        </h1>
        <div className="customHidden pb-10 sm:pt-10 lg:flex lg:flex-row">
          <ul className="customHidden steps steps-horizontal w-[20rem] gap-x-4 overflow-x-auto pb-4 md:w-96 lg:steps-vertical lg:max-w-fit lg:pr-4">
            {companies.map((company) => {
              return (
                <li
                  data-content={company.industry}
                  className={clsx("step ", {
                    "step-primary cursor-pointer":
                      selected.name === company.name,
                  })}
                  key={company.name}
                  onClick={() => setSelected(company)}
                >
                  {company.name}
                </li>
              );
            })}
          </ul>
          <div className="customHidden card image-full bg-base-100 shadow-xl sm:h-[26rem] sm:w-80 md:min-h-[28rem] md:w-96">
            <figure className="opacity-20">
              <img src={selected.image} alt="Shoes" />
            </figure>
            <div className="card-body min-h-full">
              <h2 className="card-title">{`${selected.role} @ ${selected.name}`}</h2>
              <p>{`${selected.term}`}</p>
              <div className="mr-4">
                {selected.highlights && (
                  <ul className="mr-4 list-disc">
                    {selected.highlights.map((item) => (
                      <li className="my-2 text-xs" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex gap-x-1">
                {selected.skills &&
                  selected.skills.map((item) => (
                    <div key={item} className="badge badge-primary text-2xs">
                      {item}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

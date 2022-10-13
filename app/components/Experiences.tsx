import clsx from "clsx";
import { useState } from "react";

export default function Experiences() {
  const companies = [
    {
      name: "Trustana",
      role: "Full Stack Developer",
      term: "June 2022 - Present",
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
      highlights: [
        "Build decentralized exchange aggregator with real-time analytics.",
      ],
      skills: ["Typescript", "SolidJS", "GCP"],
    },
    {
      name: "Switcheo",
      role: "Full Stack Developer",
      term: "July 2021 - March 2022",
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
      highlights: [
        "Improve power integrity on pre-silicon polymer designs through validation simulations.",
      ],
      skills: ["Python"],
    },
    {
      name: "Intel",
      role: "Software Engineer",
      term: "August 2015 - Feb 2018",
      highlights: [
        "Build high-voltage verification tools for pre-silicon schematic designs",
      ],
      skills: ["Python", "C++"],
    },
    {
      name: "Sony",
      role: "Software Engineer",
      term: "June 2014 - August 2015",
      highlights: [
        "Build autonomous testing suite for software verification tests for audio systems of Sony's TV series.",
      ],
      skills: ["VBA"],
    },
  ];
  const [selected, setSelected] = useState(companies[0]);
  return (
    <>
      <div className="xs:ml-4 hero flex min-h-[100vh] flex-col justify-center bg-base-100 sm:mb-10">
        <h1 className="mb-10 self-center bg-gradient-to-tr from-primary to-secondary bg-clip-text text-6xl text-transparent sm:mt-10">
          {`Experiences`}
        </h1>
        <div className="md:flex md:flex-row">
          <ul className="menu grid bg-base-100 sm:grid-cols-3 md:w-48 md:grid-cols-1">
            {companies.map((company) => {
              return (
                <li
                  className={clsx({
                    "bg-gradient-to-tr from-primary to-accent":
                      selected.name === company.name,
                  })}
                  key={company.name}
                  onClick={() => setSelected(company)}
                >
                  <a>{company.name}</a>
                </li>
              );
            })}
          </ul>
          <div className="card image-full bg-base-100 shadow-xl sm:h-80 sm:w-80 md:min-h-[21.5rem] md:w-96">
            {/* <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure> */}
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

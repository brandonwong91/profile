import clsx from "clsx";
import { useState } from "react";

export default function Experience() {
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
      skills: ["Typescript", "Solidjs", "GCP"],
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
    <div className="bg-base-700 hero flex min-h-[50vh] justify-center">
      <div className="sm:flex-col md:flex md:flex-row">
        <ul className="rounded-0 bg-base-100 sm:menu-horizontal sm:overflow-scroll md:menu md:w-56">
          {companies.map((company) => {
            return (
              <li
                className={clsx("hover-bordered", {
                  "bg-secondary": selected.name === company.name,
                })}
                key={company.name}
                onClick={() => setSelected(company)}
              >
                <a>{company.name}</a>
              </li>
            );
          })}
        </ul>
        <div className="card image-full w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{`${selected.role} @ ${selected.name}`}</h2>
            <p>{`${selected.term}`}</p>
            {selected.highlights && (
              <ul className="ml-4 list-disc">
                {selected.highlights.map((item) => (
                  <li className="my-2 text-xs" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
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
  );
}

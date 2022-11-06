import ContactIcons from "./ContactIcons";

export default function Footer() {
  const techList = [
    { name: "Remix", href: "https://remix.run/" },
    { name: "DaisyUI", href: "https://daisyui.com/" },
    { name: "Vercel", href: "https://vercel.com/" },
    { name: "NLP.js", href: "https://github.com/axa-group/nlp.js/" },
  ];
  return (
    <footer className="footer items-center bg-base-200 p-4 text-neutral-content sm:gap-y-2">
      <div className="grid-flow-col items-center">
        <p>Copyright © 2022 Brandon Wong. All rights reserved.</p>
      </div>
      <code className="flex text-success">
        BuiltWith = [{" "}
        <div className="flex gap-x-2">
          {techList.map((tech, index) => {
            return (
              <a
                className="link-animation text-info"
                key={index}
                href={tech.href}
                target="_blank"
                rel="noreferrer"
              >
                {tech.name}
              </a>
            );
          })}
        </div>{" "}
        ]
      </code>
      <div className="grid-flow-col gap-4 sm:items-center md:place-self-center md:justify-self-end">
        <ContactIcons />
      </div>
    </footer>
  );
}

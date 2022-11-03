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
        Built = [{" "}
        <div className="flex gap-x-2">
          {techList.map((tech, index) => {
            return (
              <a
                className="link-animation text-info"
                key={index}
                href={tech.href}
              >
                {tech.name}
              </a>
            );
          })}
        </div>{" "}
        ]
      </code>
      <div className="grid-flow-col gap-4 sm:items-center md:place-self-center md:justify-self-end">
        <a
          href={`BrandonWong_CV_2022q3.pdf`}
          download
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-8 hover:scale-110">
            <img src={`img/icons8-resume-50.png`} alt={""} />
          </div>
        </a>
        <a
          href={"https://www.linkedin.com/in/brandonwong91/"}
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-8 hover:scale-110">
            <img src={`img/icons8-linkedin-48.png`} alt={""} />
          </div>
        </a>
        <a
          href={"https://github.com/brandonwong91"}
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-8 hover:scale-110">
            <img src={`img/icons8-github-30.png`} alt={""} />
          </div>
        </a>
      </div>
    </footer>
  );
}

function ContactIcons() {
  return (
    <>
      <a
        href={`BrandonWong_CV_2023q1.pdf`}
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
          <img src={`img/icons8-linkedin-50.png`} alt={""} />
        </div>
      </a>
      <a
        href={"https://github.com/brandonwong91"}
        target="_blank"
        rel="noreferrer"
      >
        <div className="w-8 hover:scale-110">
          <img src={`img/icons8-github-50.png`} alt={""} />
        </div>
      </a>
    </>
  );
}

export default ContactIcons;

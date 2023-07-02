import "./HeaderBar.css";

export const HeaderBar = () => {
  return (
    <>
      <div id="topDiv">
        <a href="/" className="contentBlock">
          <p>Home</p>
        </a>
        <a href="skills" className="contentBlock">
          <p>Skills</p>
        </a>

        <a href="/resume" className="contentBlock">
          <p>Resume</p>
        </a>
      </div>
    </>
  );
};

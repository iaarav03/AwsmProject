import { useState } from "react";

const Section = ({
  title,
  description,
  isVisible,
  setIsVisisble,
  setIsVisisblee,
}) => {
  return (
    <>
      <div className="border border-black">
        <h1
          className="font-bold
    "
        >
          {title}
        </h1>

        {isVisible ? (
          <button onClick={() => setIsVisisblee()}>Hide</button>
        ) : (
          <button onClick={() => setIsVisisble()}>Show</button>
        )}

        {isVisible && <p>{description}</p>}
      </div>
    </>
  );
};

const About = () => {
  const [section, setSection] = useState("");
  return (
    <>
      <Section
        isVisible={section === "about"}
        setIsVisisblee={() => setSection("titlee")}
        title={"Aboutt instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        setIsVisisble={() => setSection("about")}
      />
      <Section
        title={"Team instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={section === "title"}
        setIsVisisble={() => setSection("title")}
        setIsVisisblee={() => setSection("titlee")}
      />
    </>
  );
};

export default About;

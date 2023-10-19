import { FC, useState } from "react";

const Index: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>Syncer Edge API</h1>

      <p>
        This project handles Discord/Github events/issues/thread events to sync
        issues and tasks together.
      </p>

      <a
        href="https://github.com/0xAndrewBlack/syncer-edge"
        target="_blank"
        rel="noopener noreferrer">
        GitHub Project
      </a>

      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default Index;

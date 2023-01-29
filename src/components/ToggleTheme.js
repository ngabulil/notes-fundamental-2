import React from "react";
import { ThemeConsumer } from "../context/ThemeContext";

function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button className="toggle-theme" onClick={toggleTheme}>
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        );
      }}
    </ThemeConsumer>
  );
}

export default ToggleTheme;

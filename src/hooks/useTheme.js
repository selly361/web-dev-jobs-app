import React, { useState, useEffect } from "react";

export const useTheme = () => {
  let default_theme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  const [theme, setTheme] = useState(default_theme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];

};


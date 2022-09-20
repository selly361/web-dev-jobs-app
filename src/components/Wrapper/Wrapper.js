import React from "react";
import { ThemeProvider } from "styled-components";
import JobsProvider from "../../context/JobsProvider";
import { GlobalStyle } from "../../global-styles/GlobalStyles";
import { dark, light } from "../../global-styles/theme";

const Wrapper = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <GlobalStyle />
      <JobsProvider>{children}</JobsProvider>
    </ThemeProvider>
  );
};

export default Wrapper;

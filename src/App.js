import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import { useTheme } from "./hooks/useTheme";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";

const Container = styled.div`
  height: max-content;
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.body.bg};
  transition: 1s background-color ease;
`;

function App() {
  const [theme, setTheme] = useTheme();
  const Location = useLocation()
    

  return (
    <Wrapper theme={theme}>
      <AnimatePresence mode="wait">
        <Container>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes location={Location} key={Location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<JobPage />} />
          </Routes>
        </Container>
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

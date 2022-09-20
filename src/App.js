import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import { useTheme } from "./hooks/useTheme";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.body.bg};
  transition: 1s background-color ease;
`;

function App() {
  const [theme, setTheme] = useTheme();
  return (
    <Wrapper theme={theme}>
      <Container>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<JobPage />} />
        </Routes>
      </Container>
    </Wrapper>
  );
}

export default App;

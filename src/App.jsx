import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Slider from "./components/Slider";
import Attributes from "./components/Attributes";
import Programs from "./components/Programs";

const StyledApp = styled.div``;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Slider />
      <Attributes />
      <Programs />
    </StyledApp>
  );
}

export default App;

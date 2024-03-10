import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Slider from "./components/Slider";
import Attributes from "./components/Attributes";
import Programs from "./components/Programs";
import PartOfUs from "./components/PartOfUs";
import Gallery from "./components/Gallery";

const StyledApp = styled.div``;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Slider />
      <Attributes />
      <PartOfUs />
      <Programs />
      <Gallery />
    </StyledApp>
  );
}

export default App;

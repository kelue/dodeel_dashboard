import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Slider from "./components/Slider";
import Attributes from "./components/Attributes";
import Programs from "./components/Programs";
import PartOfUs from "./components/PartOfUs";
import Gallery from "./components/Gallery";
import Accordion from "./components/Accordion";

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
      <Accordion />
    </StyledApp>
  );
}

export default App;

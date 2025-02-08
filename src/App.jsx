import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Row from "./ui/Row";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Row type="horizontal">
        <div>
          <h1>The Hotel</h1>
        </div>
        <div>Check-in / Check-out</div>
      </Row>
      <Row type="vertical">
        <h1>Form</h1>
        <div></div>
      </Row>
    </>
  );
}

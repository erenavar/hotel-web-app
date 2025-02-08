import GlobalStyles from "./styles/GlobalStyle";
import Row from "./ui/Row";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Row type="vertical">
        <Row type="horizontal">
          <div>
            <h1>The Hotel</h1>
          </div>
          <div>Check-in / Check-out</div>
        </Row>
        <Row type="vertical">
          <h3>Form</h3>
          <form>
            <div>data1</div>
            <div>data2</div>
          </form>
        </Row>
      </Row>
    </>
  );
}

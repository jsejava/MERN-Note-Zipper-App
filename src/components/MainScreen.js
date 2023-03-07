import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";

const MainScreen = ({ title, children }) => {
  return (
    <div>
      <div className="mainback">
        <Container>
          <Row>
            <div className="page">
              {title && (
                <>
                  <h1 className="heading">{title}</h1>
                  <hr />
                </>
              )}
              {children}
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MainScreen;

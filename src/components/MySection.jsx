import { Container, Dropdown } from "react-bootstrap";

const MySection = () => (
  <Container fluid className="bg">
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h2 className="mb-4 text-white">TV Shows</h2>
        <div className="btn-group" role="group">
            <Dropdown className="dropdown ms-4 mt-1">
              <Dropdown.Toggle 
              type="button"
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0 button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#comedy">Comedy</Dropdown.Item>
                <Dropdown.Item href="#drama">Drama</Dropdown.Item>
                <Dropdown.Item href="#thriller">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
      </div>
      <div>
        <i className="bi bi-grid icons text-white"></i>
        <i className="bi bi-grid-3x3 icons text-white ms-4 me-2"></i>
      </div>
    </div>
  </Container>
);

export default MySection;

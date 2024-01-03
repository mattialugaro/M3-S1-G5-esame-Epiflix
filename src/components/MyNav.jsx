import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
  return (
    <Navbar expand="lg" className="bg" data-bs-theme="dark">
      <Container fluid>
            <Navbar.Brand href="#home">
            <img src="C:\Users\MattiaRossi\Desktop\epiflix\public\assets\image\logo.png" alt="logo netflix" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvShows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#recentlyAdded">Recently Added</Nav.Link>
            <Nav.Link href="#myList">My List</Nav.Link>
          </Nav>
            <div className="d-flex align-items-center">
                <i className="bi bi-search icons text-white me-3"></i>
                <div id="kids" className="fw-bold text-white me-3">KIDS</div>
                <i className="bi bi-bell icons text-white me-3"></i>
                <i className="bi bi-person-circle icons text-white"></i>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
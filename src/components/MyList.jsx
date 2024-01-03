import { Col, Container, Row } from "react-bootstrap";
import MyPoster from "./MyPoster";

const MyList = ({content, poster}) => (

    <Container fluid className="bg pb-4">
        <h4 className="text-white">{content}</h4>
        <Row xs={1} sm={2} lg={4} xl={6}>
            {/* <MyPoster moviesName={"superman"}/> */}
            <Col className="mb-2 text-center px-1">
                <img fluid src={poster} alt="moviePicture" />
            </Col>
            <Col className="mb-2 text-center px-1">
                <img fluid src={poster} alt="moviePicture" />
            </Col>
            <Col className="mb-2 text-center px-1">
                <img fluid src={poster} alt="moviePicture" />
            </Col>
            <Col className="mb-2 text-center px-1">
                <img fluid src={poster} alt="moviePicture" />
            </Col>
            <Col className="mb-2 text-center px-1">
                <img fluid src={poster} alt="moviePicture" />
            </Col>
            <Col className="mb-2 text-center px-1">
                <img fluid src={poster} alt="moviePicture" />
            </Col>
        </Row>
    </Container>
)

export default MyList

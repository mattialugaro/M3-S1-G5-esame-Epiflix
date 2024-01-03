import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MySelection from './components/MySection';
import MyFooter from './components/MyFooter';
import { Container } from 'react-bootstrap';
import MyList from './components/MyList';

function App() {
  return (
      <Container fluid>
      <MyNav />
      <MySelection />
      <MyList content="Trending Now" />
      <MyList content="Watch it Again" />
      <MyList content="New Releases" />
      <MyFooter />
      </Container>
  );
}

export default App;

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
        <MyList content="Trending Now" moviesName="superman" />
        <MyList content="Watch it Again" moviesName="spiderman" />
        <MyList content="New Releases" moviesName="lord of the rings" />
        <MyFooter />  
      </Container>
  );
}

export default App;

import logo from '../logo.png';
import '../App.css';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>All people from the all SEVEN Star Wars films </p>
          <p>Now with The Force Awakens data!</p>
          <Link
            className="App-link"
            to='/Table'
          >
            Click to go to the table!
          </Link>
        </header>
      </div>
    );
}

export default Welcome;
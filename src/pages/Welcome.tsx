import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world!
          </p>
          <Link
            className="App-link"
            to='/Table'
          >
            Go to this page!
          </Link>
        </header>
      </div>
    );
}

export default Welcome;
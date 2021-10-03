import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import MainPage from './components/MainPage/MainPage';
import AboutPage from './components/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={MainPage} />
        <Route path="/about" exact component={AboutPage} />
      </Router>
    </div>
  );
}

export default App;
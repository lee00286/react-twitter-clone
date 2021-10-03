import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Feed from './components/Feed/Feed';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Router>
        <Route path="/" exact component={Feed} />
      </Router>
    </div>
  );
}

export default App;
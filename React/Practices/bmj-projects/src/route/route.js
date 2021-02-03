import './router.css';
import CovidApp from '../projects/covid';
import WeatherForcast from '../projects/weatherForcast';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>
                <div className='mainCard'>
                  <i class='fas fa-atom fa-2x'></i>
                  <h3>My Home</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/covid'>
                <div className='mainCard'>
                  <i class='fas fa-atom fa-2x'></i>
                  <h3>Covid Application</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/weatherforcast'>
              <div className='mainCard'>
                  <i class='fas fa-atom fa-2x'></i>
                  <h3>Weather Forcast</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/quiz-app'>
              <div className='mainCard'>
                  <i class='fas fa-atom fa-2x'></i>
                  <h3>Quiz Application</h3>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/quiz-app'>
            <QuizApp />
          </Route>
          <Route exact path='/weatherforcast'>
            <WeatherForcast />
          </Route>
          <Route exact path='/covid'>
            <CovidApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function QuizApp() {
  return <h2>Quiz Application is under Development Process...</h2>;
}
function Home() {
  return <h2>Welcome to Home</h2>;
}

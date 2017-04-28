import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const BasicExample = () => {
  return <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/topics" component={Topics}></Route>
    </div>
  </Router>
}

const Home = () => {
  return <div>
    <h2>Home</h2>
  </div>;
}
const About = () => {
  return <div>
    <h2>About</h2>
  </div>;
}
const Topics = ({ match }) => {
  return <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with react
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props vs State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}></Route>
    <Route exact path={match.url} render={() => (
      <h3>Please Select a topic</h3>
    )}></Route>
  </div>;
}

const Topic = ({ match }) => {
  console.log(match);
  return <div>
    <h3>{match.params.topicId}</h3>
  </div>;
}

ReactDOM.render(<BasicExample />, 
  document.querySelector(".container")
)

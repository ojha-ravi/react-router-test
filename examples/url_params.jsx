import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class UrlParams extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <Route path={"/:id"} component={Child}></Route>
        </div>
      </Router>
    );
  }
}

class Child extends React.Component {
  render() {
    return <div>
      {this.props.match.params.id}
    </div>;
  }
}


ReactDOM.render(
  <UrlParams />,
  document.querySelector(".container")
);

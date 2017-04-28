import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';

export class AuthExample extends React.Component {
  render() {
    return <Router>
      <div>
        <ul>
          <li><Link to="/public">Public</Link></li>
          <li><Link to="/protected">Protected</Link></li>
        </ul>
        <Route path={"/public"} component={Public}></Route>
        <Route path={"/protected"} component={Login}></Route>
        <PrivateRoute path="/protected" component={Protected}/>
      </div>
    </Router>;
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}


const PrivateRoute = ({component: Component, ...rest}) => {
  return  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
}

const Public = () => {
  return <div>Public Page</div>;
}
const Protected = () => {
  return <div>Protected Page</div>;
}

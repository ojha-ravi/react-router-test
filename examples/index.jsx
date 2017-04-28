import * as React from 'react';
import * as ReactDOM from "react-dom";
import { AuthExample } from './auth';

class App extends React.Component {
  render() {
    return <AuthExample></AuthExample>;
  }
}

ReactDOM.render(<App />, 
  document.querySelector(".container")
)

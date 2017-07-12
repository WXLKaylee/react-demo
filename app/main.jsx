import React    from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route path="/index" component={ require("./pages/index").default } />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'));

import React    from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Index from './pages/index';

console.log(22223);

const App = () => (
  <Router>
    <div>
      <Route path="/app" render={ () => {
          return (<Layout>
            <Route path="/index" component={ Index } />
          </Layout>);
        } } />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'));

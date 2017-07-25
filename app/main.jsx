import React    from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Index from './pages/index';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Route exact path="/" render={ () => <Redirect to="/index" /> } />
            <Route path="/index" component={ Index } />
          </Layout>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

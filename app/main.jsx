import React    from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import store from './store/index';
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

const AppDom = (<Provider store={ store }>
  { <App /> }
</Provider>);

ReactDOM.render(AppDom, document.getElementById('app'));

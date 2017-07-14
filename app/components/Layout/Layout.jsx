import React  from 'react';
import { Link } from 'react-router-dom'

export default class Layout extends React.Component {

  render() {
    return (
      <div className="app-container">
        <h1>APP</h1>
        <Link to="/index">IndeX</Link>
        { this.props.children }
      </div>
    );
  }
}

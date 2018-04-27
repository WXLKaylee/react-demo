import React  from 'react';
import { connect } from 'react-redux';

import { COUNT } from '../actions';

@connect(state => ({ count: state.count }), dispatch => ({ dispatch }))
export default class Index extends React.Component {

  state = {
    name: 'WXLKaylee',
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  }

  render() {
    const { name, text } = this.state;
    const { count, dispatch } = this.props;
    return (
      <div className="index-container">
        <h3>首页</h3>
        <input value={ name } onChange={ this.handleChange.bind(this) } />
        <h3>{ `${name},Hello!` }</h3>
        <h3>redux demo</h3>
        <div>count: {count.count} preCount: {count.preCount} nextCount: {count.nextCount}</div>
        <span className="btn" onClick={ () => {
            dispatch(COUNT.addCount());
          } }>addCount</span>
        <span className="btn" onClick={ () => {
            dispatch(COUNT.resetCount());
          } }>resetCount</span>
        <span className="btn" onClick={ () => {
            dispatch(COUNT.setCount({
              count: 100,
              preCount: 50,
              nextCount: 150,
            }));
          } }>setCount</span>
      </div>
    );
  }
}

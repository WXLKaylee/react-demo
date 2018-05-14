import React  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { COUNT, NAME } from '../actions';

@connect(state => ({
  count: state.count,
  name: state.name
}), dispatch => ({ 
  dispatch,
  getName: bindActionCreators(NAME.fetchName, dispatch),
 }))
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

        <h3>redux demo - request</h3>
        <div>name: { this.props.name.isFetching ? 'loading...' : this.props.name.name }</div>
        <span className="btn" onClick={ () => {
            this.props.getName();
          } }>getName</span>
      </div>
    );
  }
}

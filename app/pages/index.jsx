import React  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Coverflow from 'coverflow-reactjs';

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
    items: [
      { id: 1,
        src: 'img/1.jpeg',
        label: '蜘蛛侠',
      },
      { id: 2,
        src: 'img/2.jpeg',
        label: '美国队长',
      },
      { id: 3,
        src: 'img/3.jpeg',
        label: '猩红女巫',
      },
      { id: 4,
        src: 'img/1.jpeg',
        label: '蜘蛛侠',
      },
      { id: 5,
        src: 'img/2.jpeg',
        label: '美国队长',
      },
      { id: 6,
        src: 'img/3.jpeg',
        label: '猩红女巫',
      },
    ]
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  }

  render() {
    const { name, text, items } = this.state;
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

        <h3>coverflow</h3>
        <Coverflow items={ items } style={ { margin: '0 auto', background: '#eee' } } hasLabel boxWidth={ 500 }
          boxHeight={ 250 } itemWidth={ 120 } itemHeight={ 120 } />
      </div>
    );
  }
}

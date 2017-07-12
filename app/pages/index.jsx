import React  from 'react';

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
    return (
      <div className="index-container">
        <input value={ name } onChange={ this.handleChange.bind(this) } />
        <h3>{ `${name},Hello!` }</h3>
      </div>
    );
  }
}

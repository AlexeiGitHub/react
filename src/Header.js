import React, { Component } from 'react';

class Header extends Component {
  render() {
    console.log('items', this.props.items);
    return (
      <div>
        {this.props.items.map((item, index) =>
          <h3 key={index}>Name: {item.name} <br /> Age: {item.age}</h3>
        )}
      </div>
    );
  }
}

export default Header;

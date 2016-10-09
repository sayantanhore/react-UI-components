import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
require('./treeview.scss');

export default class TreeView extends Component {
  constructor() {
    super();
    this.clicked = null;
    this.handleClick = this.handleClick.bind(this);
    this.extractListItems = this.extractListItems.bind(this);
  }
  handleClick(event) {
    ReactDOM.findDOMNode(event.target).classList.toggle('li-collapsed');
    ReactDOM.findDOMNode(event.target).classList.toggle('li-expanded');
    event.stopPropagation();
  }
  extractListItems(list) {
    return list.map((item, index) => {
      if(_.has(item, 'categories')) {
        return <li className="li-collapsed" key={index} onClick={(event) => this.handleClick(event)}>
          {item.name}<ul>{this.extractListItems(item.categories)}</ul>
        </li>;
      }
      return <li key={index} onClick={(event) => this.handleClick(event)}>{item.name}</li>;
    });
  }
  render() {
    return (
      <ul>{this.extractListItems(this.props.list)}</ul>
    );
  }
}

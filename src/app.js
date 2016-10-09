import React from 'react';
import ReactDOM from 'react-dom';
import TreeView from './TreeView';
import {store} from './store';

ReactDOM.render(<TreeView list={store.list}/>, document.getElementById('container'));

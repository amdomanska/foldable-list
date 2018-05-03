import React from 'react';
import ReactDOM from 'react-dom';
import {StyleRoot} from 'radium';
import {Treebeard, decorators} from '../src/index';
import HelpWindow from './components/helpWindow';

import {parseTree} from './parseTree';
import styles from './styles';

class Tree extends React.Component {
  constructor() {
    super();
    this.defaultState = {title: 'Your Table of Contents', toggled: false, children: null};
    this.state = this.defaultState;
    this.toggled = true;
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle = (node, toggled) => {
    const {cursor} = this.state;
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    node.toggled = toggled;
    this.setState({cursor: node});
  }

  onDataChange = (e) => {
    const newData = e.target.value.trim();
    let updated = this.defaultState;
    if (newData) {
      updated = parseTree(newData);
    }
    this.setState(updated);
  }

  render() {
    return (
      <div>
      <HelpWindow/>
        <div style={styles.rowEqHeight}>
          <div style={styles.component}>
              <textarea id='textarea'
                     style={styles.textarea}
                     className='form-control'
                     onChange={this.onDataChange}
                     placeholder='Type your data...'></textarea>
          </div>

          <div style={styles.component}>
            <Treebeard data={this.state}
                       decorators={decorators}
                       onToggle={this.onToggle}/>
          </div>
        </div>
      </div>
    );
  }
}

const content = document.getElementById('content');
ReactDOM.render(<Tree />, content);

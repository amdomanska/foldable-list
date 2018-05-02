import React from 'react';
import ReactDOM from 'react-dom';
import {StyleRoot} from 'radium';
import {Treebeard, decorators} from '../src/index';
import HelpWindow from './components/helpWindow';

import {parseTree} from './data';
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

  auto_grow = () => {
    let element = document.getElementById('textarea');
    element.style.height = (element.scrollHeight) + 'px';
  }

  render() {
    return (
      <StyleRoot>
        <div style={styles.dataBox}>
          <div className='input-group'>
            <textarea id='textarea'
                   className='form-control'
                   onChange={this.onDataChange}
                   placeholder='Type your data...'
                   onKeyUp={this.auto_grow}></textarea>
           <HelpWindow/>
          </div>
          <div style={styles.component}>
              <Treebeard data={this.state}
                         decorators={decorators}
                         onToggle={this.onToggle}/>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

const content = document.getElementById('content');
ReactDOM.render(<Tree />, content);

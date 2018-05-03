import React from 'react';
import ReactDOM from 'react-dom';
import {StyleRoot} from 'radium';
import {Treebeard, decorators} from '../src/index';
import HelpWindow from './components/helpWindow';

import {parseTree} from './treeParser';
import styles from './styles';

class App extends React.Component {
  constructor() {
    super();
    this.defaultState = {title: 'Your Table of Contents', toggled: false, children: null, number: ''};
    this.state = this.defaultState;
    this.toggled = true;
    this.onToggle = this.onToggle.bind(this);
    document.title = 'Table of Contents Generator';
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
      <checkbox id='displayNumber'></checkbox>
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
ReactDOM.render(<App />, content);

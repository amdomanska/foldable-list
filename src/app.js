import React from 'react';
import ReactDOM from 'react-dom';
import {StyleRoot} from 'radium';
import {Treebeard, decorators} from '../src/index';

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
        <div className="input-group">
          <textarea id="textarea"
                 className="form-control"
                 onChange={this.onDataChange}
                 placeholder="Type your data..."
                 onKeyUp={this.auto_grow}></textarea>
           <span className="input-group-addon">
              <i className="fa fa-question"
                title="
                FORMAT: \
                page 1\n\
                  page 1.1\n\
                  page 1.2\n\
                    page 1.2.1\n\
                page 2\n\
                page 3\n\
                  page 3.1\n\
                  page 3.2\n\
                page 4\n\
                  page 4.1\n\
                    page 4.1.1\n\
                      page 4.1.1.1\n\
                  page 4.2\n\
                page 5\
                "
              />
           </span>
          </div>
        </div>
        <div style={styles.component}>
            <Treebeard data={this.state}
                       decorators={decorators}
                       onToggle={this.onToggle}/>
        </div>
      </StyleRoot>
    );
  }
}

const content = document.getElementById('content');
ReactDOM.render(<Tree />, content);

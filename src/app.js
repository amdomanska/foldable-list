'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {StyleRoot} from 'radium';
import {Treebeard, decorators} from '../src/index';

import {parseTree} from './data';
import styles from './styles';

const HELP_MSG = 'Select A Node To See Its Data Structure Here...';

// Example: Customising The Header Decorator To Include Icons
decorators.Header = ({style, node}) => {
    const iconType = node.children ? '' : 'file-text';
    const iconClass = `fa fa-${iconType}`;
    const iconStyle = {marginRight: '5px'};

    return (
        <div style={style.base}>
            <div style={style.title}>
                <i className={iconClass} style={iconStyle}/>
                {node.title}
            </div>
        </div>
    );
};

class NodeViewer extends React.Component {
    render() {
        const style = styles.viewer;
        let json = JSON.stringify(this.props.node, null, 4);

        if (!json) {
            json = HELP_MSG;
        }

        return <div style={style.base}>{json}</div>;
    }
}
NodeViewer.propTypes = {
    node: PropTypes.object
};

class Tree extends React.Component {
    constructor() {
        super();
        this.state = {title: 'Your Table of Contents'};
        this.toggled = true;
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(node, toggled) {
        const {cursor} = this.state;

        if (cursor) {
            cursor.active = false;
        }

        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }

        this.setState({cursor: node});
    }

    onDataChange(e) {
        const newData = e.target.value.trim();
        if (!newData) {
            return this.setState({title: 'Your Table of Contents'});
        }
        let updated = parseTree(newData);
        this.setState(updated);
    }

    render() {
        return (
          <StyleRoot>
          <div style={styles.dataBox}>
            <div className="input-group">
              <textarea className="form-control"
                     onChange={this.onDataChange.bind(this)}
                     placeholder="Type your data..."></textarea>
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
ReactDOM.render(<Tree/>, content);

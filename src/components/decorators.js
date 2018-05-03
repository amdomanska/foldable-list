import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import {VelocityComponent} from 'velocity-react';

const Loading = ({style}) => {
  return <div style={style}>loading...</div>;
};
Loading.propTypes = {
  style: PropTypes.object
};

const Toggle = ({style}) => {
  return (
      <div style={style.base}>
          <div style={style.wrapper}>
            <i className='fa fa-list-ul'/>
          </div>
      </div>
  );
};
Toggle.propTypes = {
  style: PropTypes.object
};

const Header = ({style, node}) => {
  return (
      <div style={style.base}>
        <div style={style.title}>
          <strong> {node.number} </strong> &nbsp;&nbsp;&nbsp;&nbsp;{node.title}
        </div>
      </div>
  );
};

Header.propTypes = {
  style: PropTypes.object,
  node: PropTypes.object.isRequired
};

@Radium
class Container extends React.Component {
  render() {
    const {style, decorators, terminal, onClick, node} = this.props;

    return (
      <div onClick={onClick}
           ref={ref => this.clickableRef = ref}
           style={style.container}>
          {!terminal && node.number !== '' ? this.renderToggle() : null}

            <decorators.Header node={node}
                style={node.number === '' ? style.root : style.header}/>
      </div>
    );
  }

  renderToggle() {
    const {animations} = this.props;

    if (!animations) {
      return this.renderToggleDecorator();
    }

    return (
      <VelocityComponent ref={ref => this.velocityRef = ref}>
          {this.renderToggleDecorator()}
      </VelocityComponent>
    );
  }

  renderToggleDecorator() {
    const {style, decorators} = this.props;

    return <decorators.Toggle style={style.toggle}/>;
  }
}
Container.propTypes = {
  style: PropTypes.object.isRequired,
  decorators: PropTypes.object.isRequired,
  terminal: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  animations: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]).isRequired,
  node: PropTypes.object.isRequired
};

export default {
  Loading,
  Toggle,
  Header,
  Container
};

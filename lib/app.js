var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _radium = require('radium');

var _index = require('../src/index');

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _filter = require('./filter');

var filters = _interopRequireWildcard(_filter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HELP_MSG = 'Select A Node To See Its Data Structure Here...';

// Example: Customising The Header Decorator To Include Icons
_index.decorators.Header = function (_ref) {
  var style = _ref.style,
    node = _ref.node;

  var iconType = node.children ? 'folder' : 'file-text';
  var iconClass = 'fa fa-' + iconType;
  var iconStyle = { marginRight: '5px' };

  return _react2.default.createElement(
      'div',
      { style: style.base },
      _react2.default.createElement(
          'div',
          { style: style.title },
          _react2.default.createElement('i', { className: iconClass, style: iconStyle }),
          node.name
      )
  );
};

var NodeViewer = function (_React$Component) {
  (0, _inherits3.default)(NodeViewer, _React$Component);

  function NodeViewer() {
    (0, _classCallCheck3.default)(this, NodeViewer);
    return (0, _possibleConstructorReturn3.default)(this, (NodeViewer.__proto__ || (0, _getPrototypeOf2.default)(NodeViewer)).apply(this, arguments));
  }

  (0, _createClass3.default)(NodeViewer, [{
    key: 'render',
    value: function render() {
      var style = _styles2.default.viewer;
      var json = (0, _stringify2.default)(this.props.node, null, 4);

      if (!json) {
        json = HELP_MSG;
      }

      return _react2.default.createElement(
          'div',
          { style: style.base },
          json
      );
    }
  }]);
  return NodeViewer;
}(_react2.default.Component);

NodeViewer.propTypes = {
  node: _propTypes2.default.object
};

var DemoTree = function (_React$Component2) {
  (0, _inherits3.default)(DemoTree, _React$Component2);

  function DemoTree() {
    (0, _classCallCheck3.default)(this, DemoTree);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (DemoTree.__proto__ || (0, _getPrototypeOf2.default)(DemoTree)).call(this));

    _this2.state = { data: _data2.default };
    _this2.onToggle = _this2.onToggle.bind(_this2);
    return _this2;
  }

  (0, _createClass3.default)(DemoTree, [{
    key: 'onToggle',
    value: function onToggle(node, toggled) {
      var cursor = this.state.cursor;


      if (cursor) {
        cursor.active = false;
      }

      node.active = true;
      if (node.children) {
        node.toggled = toggled;
      }

      this.setState({ cursor: node });
    }
  }, {
    key: 'onFilterMouseUp',
    value: function onFilterMouseUp(e) {
      var filter = e.target.value.trim();
      if (!filter) {
        return this.setState({ data: _data2.default });
      }
      var filtered = filters.filterTree(_data2.default, filter);
      filtered = filters.expandFilteredNodes(filtered, filter);
      this.setState({ data: filtered });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
        stateData = _state.data,
        cursor = _state.cursor;


      return _react2.default.createElement(
          _radium.StyleRoot,
          null,
          _react2.default.createElement(
              'div',
              { style: _styles2.default.searchBox },
              _react2.default.createElement(
                  'div',
                  { className: 'input-group' },
                  _react2.default.createElement(
                      'span',
                      { className: 'input-group-addon' },
                      _react2.default.createElement('i', { className: 'fa fa-search' })
                  ),
                  _react2.default.createElement('input', { className: 'form-control',
                      onKeyUp: this.onFilterMouseUp.bind(this),
                      placeholder: 'Search the tree...',
                      type: 'text' })
              )
          ),
          _react2.default.createElement(
              'div',
              { style: _styles2.default.component },
              _react2.default.createElement(_index.Treebeard, { data: stateData,
                  decorators: _index.decorators,
                  onToggle: this.onToggle })
          ),
          _react2.default.createElement(
              'div',
              { style: _styles2.default.component },
              _react2.default.createElement(NodeViewer, { node: cursor })
          )
      );
    }
  }]);
  return DemoTree;
}(_react2.default.Component);

var content = document.getElementById('content');
_reactDom2.default.render(_react2.default.createElement(DemoTree, null), content);

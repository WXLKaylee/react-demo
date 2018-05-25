webpackHotUpdate(0,{

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(38);

var _reactRedux = __webpack_require__(97);

var _coverflowReactjs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"coverflow-reactjs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _coverflowReactjs2 = _interopRequireDefault(_coverflowReactjs);

var _actions = __webpack_require__(111);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    count: state.count,
    name: state.name
  };
}, function (dispatch) {
  return {
    dispatch: dispatch,
    getName: (0, _redux.bindActionCreators)(_actions.NAME.fetchName, dispatch)
  };
}), _dec(_class = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: 'WXLKaylee',
      items: [{ id: 1,
        src: '1.jpeg',
        label: '蜘蛛侠'
      }, { id: 2,
        src: '2.jpeg',
        label: '美国队长'
      }, { id: 3,
        src: '3.jpeg',
        label: '猩红女巫'
      }, { id: 4,
        src: '1.jpeg',
        label: '蜘蛛侠'
      }, { id: 5,
        src: '2.jpeg',
        label: '美国队长'
      }, { id: 6,
        src: '3.jpeg',
        label: '猩红女巫'
      }]
    }, _this.handleChange = function (e) {
      var value = e.target.value;

      _this.setState({ name: value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          name = _state.name,
          text = _state.text;
      var _props = this.props,
          count = _props.count,
          dispatch = _props.dispatch;

      return _react2.default.createElement(
        'div',
        { className: 'index-container' },
        _react2.default.createElement(
          'h3',
          null,
          '\u9996\u9875'
        ),
        _react2.default.createElement('input', { value: name, onChange: this.handleChange.bind(this) }),
        _react2.default.createElement(
          'h3',
          null,
          name + ',Hello!'
        ),
        _react2.default.createElement(
          'h3',
          null,
          'redux demo'
        ),
        _react2.default.createElement(
          'div',
          null,
          'count: ',
          count.count,
          ' preCount: ',
          count.preCount,
          ' nextCount: ',
          count.nextCount
        ),
        _react2.default.createElement(
          'span',
          { className: 'btn', onClick: function onClick() {
              dispatch(_actions.COUNT.addCount());
            } },
          'addCount'
        ),
        _react2.default.createElement(
          'span',
          { className: 'btn', onClick: function onClick() {
              dispatch(_actions.COUNT.resetCount());
            } },
          'resetCount'
        ),
        _react2.default.createElement(
          'span',
          { className: 'btn', onClick: function onClick() {
              dispatch(_actions.COUNT.setCount({
                count: 100,
                preCount: 50,
                nextCount: 150
              }));
            } },
          'setCount'
        ),
        _react2.default.createElement(
          'h3',
          null,
          'redux demo - request'
        ),
        _react2.default.createElement(
          'div',
          null,
          'name: ',
          this.props.name.isFetching ? 'loading...' : this.props.name.name
        ),
        _react2.default.createElement(
          'span',
          { className: 'btn', onClick: function onClick() {
              _this2.props.getName();
            } },
          'getName'
        ),
        _react2.default.createElement(
          'h3',
          null,
          'coverflow'
        ),
        _react2.default.createElement(_coverflowReactjs2.default, { items: items, style: { margin: '0 auto', background: '#999' }, hasLabel: true, boxWidth: 500,
          boxHeight: 250, itemWidth: 120, itemHeight: 120 })
      );
    }
  }]);

  return Index;
}(_react2.default.Component)) || _class);
exports.default = Index;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkluZGV4IiwiY291bnQiLCJzdGF0ZSIsIm5hbWUiLCJkaXNwYXRjaCIsImdldE5hbWUiLCJmZXRjaE5hbWUiLCJpdGVtcyIsImlkIiwic3JjIiwibGFiZWwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInRleHQiLCJwcm9wcyIsImJpbmQiLCJwcmVDb3VudCIsIm5leHRDb3VudCIsImFkZENvdW50IiwicmVzZXRDb3VudCIsInNldENvdW50IiwiaXNGZXRjaGluZyIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBU3FCQSxLLFdBUHBCLHlCQUFRO0FBQUEsU0FBVTtBQUNqQkMsV0FBT0MsTUFBTUQsS0FESTtBQUVqQkUsVUFBTUQsTUFBTUM7QUFGSyxHQUFWO0FBQUEsQ0FBUixFQUdHO0FBQUEsU0FBYTtBQUNmQyxzQkFEZTtBQUVmQyxhQUFTLCtCQUFtQixjQUFLQyxTQUF4QixFQUFtQ0YsUUFBbkM7QUFGTSxHQUFiO0FBQUEsQ0FISCxDOzs7Ozs7Ozs7Ozs7OztvTEFTQ0YsSyxHQUFRO0FBQ05DLFlBQU0sV0FEQTtBQUVOSSxhQUFPLENBQ0wsRUFBRUMsSUFBSSxDQUFOO0FBQ0VDLGFBQUssUUFEUDtBQUVFQyxlQUFPO0FBRlQsT0FESyxFQUtMLEVBQUVGLElBQUksQ0FBTjtBQUNFQyxhQUFLLFFBRFA7QUFFRUMsZUFBTztBQUZULE9BTEssRUFTTCxFQUFFRixJQUFJLENBQU47QUFDRUMsYUFBSyxRQURQO0FBRUVDLGVBQU87QUFGVCxPQVRLLEVBYUwsRUFBRUYsSUFBSSxDQUFOO0FBQ0VDLGFBQUssUUFEUDtBQUVFQyxlQUFPO0FBRlQsT0FiSyxFQWlCTCxFQUFFRixJQUFJLENBQU47QUFDRUMsYUFBSyxRQURQO0FBRUVDLGVBQU87QUFGVCxPQWpCSyxFQXFCTCxFQUFFRixJQUFJLENBQU47QUFDRUMsYUFBSyxRQURQO0FBRUVDLGVBQU87QUFGVCxPQXJCSztBQUZELEssUUE4QlJDLFksR0FBZSxVQUFDQyxDQUFELEVBQU87QUFBQSxVQUNaQyxLQURZLEdBQ0ZELEVBQUVFLE1BREEsQ0FDWkQsS0FEWTs7QUFFcEIsWUFBS0UsUUFBTCxDQUFjLEVBQUVaLE1BQU1VLEtBQVIsRUFBZDtBQUNELEs7Ozs7OzZCQUVRO0FBQUE7O0FBQUEsbUJBQ2dCLEtBQUtYLEtBRHJCO0FBQUEsVUFDQ0MsSUFERCxVQUNDQSxJQUREO0FBQUEsVUFDT2EsSUFEUCxVQUNPQSxJQURQO0FBQUEsbUJBRXFCLEtBQUtDLEtBRjFCO0FBQUEsVUFFQ2hCLEtBRkQsVUFFQ0EsS0FGRDtBQUFBLFVBRVFHLFFBRlIsVUFFUUEsUUFGUjs7QUFHUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsaUJBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSxpREFBTyxPQUFRRCxJQUFmLEVBQXNCLFVBQVcsS0FBS1EsWUFBTCxDQUFrQk8sSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBakMsR0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFTZixjQUFUO0FBQUEsU0FIRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FMRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQWFGLGdCQUFNQSxLQUFuQjtBQUFBO0FBQXFDQSxnQkFBTWtCLFFBQTNDO0FBQUE7QUFBaUVsQixnQkFBTW1CO0FBQXZFLFNBTkY7QUFPRTtBQUFBO0FBQUEsWUFBTSxXQUFVLEtBQWhCLEVBQXNCLFNBQVUsbUJBQU07QUFDbENoQix1QkFBUyxlQUFNaUIsUUFBTixFQUFUO0FBQ0QsYUFGSDtBQUFBO0FBQUEsU0FQRjtBQVVFO0FBQUE7QUFBQSxZQUFNLFdBQVUsS0FBaEIsRUFBc0IsU0FBVSxtQkFBTTtBQUNsQ2pCLHVCQUFTLGVBQU1rQixVQUFOLEVBQVQ7QUFDRCxhQUZIO0FBQUE7QUFBQSxTQVZGO0FBYUU7QUFBQTtBQUFBLFlBQU0sV0FBVSxLQUFoQixFQUFzQixTQUFVLG1CQUFNO0FBQ2xDbEIsdUJBQVMsZUFBTW1CLFFBQU4sQ0FBZTtBQUN0QnRCLHVCQUFPLEdBRGU7QUFFdEJrQiwwQkFBVSxFQUZZO0FBR3RCQywyQkFBVztBQUhXLGVBQWYsQ0FBVDtBQUtELGFBTkg7QUFBQTtBQUFBLFNBYkY7QUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXJCRjtBQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFhLGVBQUtILEtBQUwsQ0FBV2QsSUFBWCxDQUFnQnFCLFVBQWhCLEdBQTZCLFlBQTdCLEdBQTRDLEtBQUtQLEtBQUwsQ0FBV2QsSUFBWCxDQUFnQkE7QUFBekUsU0F0QkY7QUF1QkU7QUFBQTtBQUFBLFlBQU0sV0FBVSxLQUFoQixFQUFzQixTQUFVLG1CQUFNO0FBQ2xDLHFCQUFLYyxLQUFMLENBQVdaLE9BQVg7QUFDRCxhQUZIO0FBQUE7QUFBQSxTQXZCRjtBQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBM0JGO0FBNEJFLG9FQUFXLE9BQVFFLEtBQW5CLEVBQTJCLE9BQVEsRUFBRWtCLFFBQVEsUUFBVixFQUFvQkMsWUFBWSxNQUFoQyxFQUFuQyxFQUE4RSxjQUE5RSxFQUF1RixVQUFXLEdBQWxHO0FBQ0UscUJBQVksR0FEZCxFQUNvQixXQUFZLEdBRGhDLEVBQ3NDLFlBQWEsR0FEbkQ7QUE1QkYsT0FERjtBQWlDRDs7OztFQXpFZ0MsZ0JBQU1DLFM7a0JBQXBCM0IsSyIsImZpbGUiOiIwLjU3OTg0NGJjMzI4MDgyNmM1M2IwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgIGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQ292ZXJmbG93IGZyb20gJ2NvdmVyZmxvdy1yZWFjdGpzJztcblxuaW1wb3J0IHsgQ09VTlQsIE5BTUUgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuQGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgY291bnQ6IHN0YXRlLmNvdW50LFxuICBuYW1lOiBzdGF0ZS5uYW1lXG59KSwgZGlzcGF0Y2ggPT4gKHtcbiAgZGlzcGF0Y2gsXG4gIGdldE5hbWU6IGJpbmRBY3Rpb25DcmVhdG9ycyhOQU1FLmZldGNoTmFtZSwgZGlzcGF0Y2gpLFxuIH0pKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIG5hbWU6ICdXWExLYXlsZWUnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IGlkOiAxLFxuICAgICAgICBzcmM6ICcxLmpwZWcnLFxuICAgICAgICBsYWJlbDogJ+icmOibm+S+oCcsXG4gICAgICB9LFxuICAgICAgeyBpZDogMixcbiAgICAgICAgc3JjOiAnMi5qcGVnJyxcbiAgICAgICAgbGFiZWw6ICfnvo7lm73pmJ/plb8nLFxuICAgICAgfSxcbiAgICAgIHsgaWQ6IDMsXG4gICAgICAgIHNyYzogJzMuanBlZycsXG4gICAgICAgIGxhYmVsOiAn54yp57qi5aWz5berJyxcbiAgICAgIH0sXG4gICAgICB7IGlkOiA0LFxuICAgICAgICBzcmM6ICcxLmpwZWcnLFxuICAgICAgICBsYWJlbDogJ+icmOibm+S+oCcsXG4gICAgICB9LFxuICAgICAgeyBpZDogNSxcbiAgICAgICAgc3JjOiAnMi5qcGVnJyxcbiAgICAgICAgbGFiZWw6ICfnvo7lm73pmJ/plb8nLFxuICAgICAgfSxcbiAgICAgIHsgaWQ6IDYsXG4gICAgICAgIHNyYzogJzMuanBlZycsXG4gICAgICAgIGxhYmVsOiAn54yp57qi5aWz5berJyxcbiAgICAgIH0sXG4gICAgXVxuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IHZhbHVlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgdGV4dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGNvdW50LCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleC1jb250YWluZXJcIj5cbiAgICAgICAgPGgzPummlumhtTwvaDM+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17IG5hbWUgfSBvbkNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcykgfSAvPlxuICAgICAgICA8aDM+eyBgJHtuYW1lfSxIZWxsbyFgIH08L2gzPlxuXG4gICAgICAgIDxoMz5yZWR1eCBkZW1vPC9oMz5cbiAgICAgICAgPGRpdj5jb3VudDoge2NvdW50LmNvdW50fSBwcmVDb3VudDoge2NvdW50LnByZUNvdW50fSBuZXh0Q291bnQ6IHtjb3VudC5uZXh0Q291bnR9PC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eyAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChDT1VOVC5hZGRDb3VudCgpKTtcbiAgICAgICAgICB9IH0+YWRkQ291bnQ8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eyAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChDT1VOVC5yZXNldENvdW50KCkpO1xuICAgICAgICAgIH0gfT5yZXNldENvdW50PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsgKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goQ09VTlQuc2V0Q291bnQoe1xuICAgICAgICAgICAgICBjb3VudDogMTAwLFxuICAgICAgICAgICAgICBwcmVDb3VudDogNTAsXG4gICAgICAgICAgICAgIG5leHRDb3VudDogMTUwLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0gfT5zZXRDb3VudDwvc3Bhbj5cblxuICAgICAgICA8aDM+cmVkdXggZGVtbyAtIHJlcXVlc3Q8L2gzPlxuICAgICAgICA8ZGl2Pm5hbWU6IHsgdGhpcy5wcm9wcy5uYW1lLmlzRmV0Y2hpbmcgPyAnbG9hZGluZy4uLicgOiB0aGlzLnByb3BzLm5hbWUubmFtZSB9PC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eyAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldE5hbWUoKTtcbiAgICAgICAgICB9IH0+Z2V0TmFtZTwvc3Bhbj5cblxuICAgICAgICA8aDM+Y292ZXJmbG93PC9oMz5cbiAgICAgICAgPENvdmVyZmxvdyBpdGVtcz17IGl0ZW1zIH0gc3R5bGU9eyB7IG1hcmdpbjogJzAgYXV0bycsIGJhY2tncm91bmQ6ICcjOTk5JyB9IH0gaGFzTGFiZWwgYm94V2lkdGg9eyA1MDAgfVxuICAgICAgICAgIGJveEhlaWdodD17IDI1MCB9IGl0ZW1XaWR0aD17IDEyMCB9IGl0ZW1IZWlnaHQ9eyAxMjAgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=
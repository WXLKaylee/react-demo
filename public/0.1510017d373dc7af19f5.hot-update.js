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
// import Coverflow from 'coverflow-reactjs';

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(38);

var _reactRedux = __webpack_require__(97);

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
        )
      );
    }
  }]);

  return Index;
}(_react2.default.Component)) || _class);
exports.default = Index;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkluZGV4IiwiY291bnQiLCJzdGF0ZSIsIm5hbWUiLCJkaXNwYXRjaCIsImdldE5hbWUiLCJmZXRjaE5hbWUiLCJpdGVtcyIsImlkIiwic3JjIiwibGFiZWwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInRleHQiLCJwcm9wcyIsImJpbmQiLCJwcmVDb3VudCIsIm5leHRDb3VudCIsImFkZENvdW50IiwicmVzZXRDb3VudCIsInNldENvdW50IiwiaXNGZXRjaGluZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUhBOzs7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7SUFTcUJBLEssV0FQcEIseUJBQVE7QUFBQSxTQUFVO0FBQ2pCQyxXQUFPQyxNQUFNRCxLQURJO0FBRWpCRSxVQUFNRCxNQUFNQztBQUZLLEdBQVY7QUFBQSxDQUFSLEVBR0c7QUFBQSxTQUFhO0FBQ2ZDLHNCQURlO0FBRWZDLGFBQVMsK0JBQW1CLGNBQUtDLFNBQXhCLEVBQW1DRixRQUFuQztBQUZNLEdBQWI7QUFBQSxDQUhILEM7Ozs7Ozs7Ozs7Ozs7O29MQVNDRixLLEdBQVE7QUFDTkMsWUFBTSxXQURBO0FBRU5JLGFBQU8sQ0FDTCxFQUFFQyxJQUFJLENBQU47QUFDRUMsYUFBSyxRQURQO0FBRUVDLGVBQU87QUFGVCxPQURLLEVBS0wsRUFBRUYsSUFBSSxDQUFOO0FBQ0VDLGFBQUssUUFEUDtBQUVFQyxlQUFPO0FBRlQsT0FMSyxFQVNMLEVBQUVGLElBQUksQ0FBTjtBQUNFQyxhQUFLLFFBRFA7QUFFRUMsZUFBTztBQUZULE9BVEssRUFhTCxFQUFFRixJQUFJLENBQU47QUFDRUMsYUFBSyxRQURQO0FBRUVDLGVBQU87QUFGVCxPQWJLLEVBaUJMLEVBQUVGLElBQUksQ0FBTjtBQUNFQyxhQUFLLFFBRFA7QUFFRUMsZUFBTztBQUZULE9BakJLLEVBcUJMLEVBQUVGLElBQUksQ0FBTjtBQUNFQyxhQUFLLFFBRFA7QUFFRUMsZUFBTztBQUZULE9BckJLO0FBRkQsSyxRQThCUkMsWSxHQUFlLFVBQUNDLENBQUQsRUFBTztBQUFBLFVBQ1pDLEtBRFksR0FDRkQsRUFBRUUsTUFEQSxDQUNaRCxLQURZOztBQUVwQixZQUFLRSxRQUFMLENBQWMsRUFBRVosTUFBTVUsS0FBUixFQUFkO0FBQ0QsSzs7Ozs7NkJBRVE7QUFBQTs7QUFBQSxtQkFDZ0IsS0FBS1gsS0FEckI7QUFBQSxVQUNDQyxJQURELFVBQ0NBLElBREQ7QUFBQSxVQUNPYSxJQURQLFVBQ09BLElBRFA7QUFBQSxtQkFFcUIsS0FBS0MsS0FGMUI7QUFBQSxVQUVDaEIsS0FGRCxVQUVDQSxLQUZEO0FBQUEsVUFFUUcsUUFGUixVQUVRQSxRQUZSOztBQUdQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxpQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLGlEQUFPLE9BQVFELElBQWYsRUFBc0IsVUFBVyxLQUFLUSxZQUFMLENBQWtCTyxJQUFsQixDQUF1QixJQUF2QixDQUFqQyxHQUZGO0FBR0U7QUFBQTtBQUFBO0FBQVNmLGNBQVQ7QUFBQSxTQUhGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBYUYsZ0JBQU1BLEtBQW5CO0FBQUE7QUFBcUNBLGdCQUFNa0IsUUFBM0M7QUFBQTtBQUFpRWxCLGdCQUFNbUI7QUFBdkUsU0FORjtBQU9FO0FBQUE7QUFBQSxZQUFNLFdBQVUsS0FBaEIsRUFBc0IsU0FBVSxtQkFBTTtBQUNsQ2hCLHVCQUFTLGVBQU1pQixRQUFOLEVBQVQ7QUFDRCxhQUZIO0FBQUE7QUFBQSxTQVBGO0FBVUU7QUFBQTtBQUFBLFlBQU0sV0FBVSxLQUFoQixFQUFzQixTQUFVLG1CQUFNO0FBQ2xDakIsdUJBQVMsZUFBTWtCLFVBQU4sRUFBVDtBQUNELGFBRkg7QUFBQTtBQUFBLFNBVkY7QUFhRTtBQUFBO0FBQUEsWUFBTSxXQUFVLEtBQWhCLEVBQXNCLFNBQVUsbUJBQU07QUFDbENsQix1QkFBUyxlQUFNbUIsUUFBTixDQUFlO0FBQ3RCdEIsdUJBQU8sR0FEZTtBQUV0QmtCLDBCQUFVLEVBRlk7QUFHdEJDLDJCQUFXO0FBSFcsZUFBZixDQUFUO0FBS0QsYUFOSDtBQUFBO0FBQUEsU0FiRjtBQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBckJGO0FBc0JFO0FBQUE7QUFBQTtBQUFBO0FBQWEsZUFBS0gsS0FBTCxDQUFXZCxJQUFYLENBQWdCcUIsVUFBaEIsR0FBNkIsWUFBN0IsR0FBNEMsS0FBS1AsS0FBTCxDQUFXZCxJQUFYLENBQWdCQTtBQUF6RSxTQXRCRjtBQXVCRTtBQUFBO0FBQUEsWUFBTSxXQUFVLEtBQWhCLEVBQXNCLFNBQVUsbUJBQU07QUFDbEMscUJBQUtjLEtBQUwsQ0FBV1osT0FBWDtBQUNELGFBRkg7QUFBQTtBQUFBLFNBdkJGO0FBMkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEzQkYsT0FERjtBQWlDRDs7OztFQXpFZ0MsZ0JBQU1vQixTO2tCQUFwQnpCLEsiLCJmaWxlIjoiMC4xNTEwMDE3ZDM3M2RjN2FmMTlmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gaW1wb3J0IENvdmVyZmxvdyBmcm9tICdjb3ZlcmZsb3ctcmVhY3Rqcyc7XG5cbmltcG9ydCB7IENPVU5ULCBOQU1FIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbkBjb25uZWN0KHN0YXRlID0+ICh7XG4gIGNvdW50OiBzdGF0ZS5jb3VudCxcbiAgbmFtZTogc3RhdGUubmFtZVxufSksIGRpc3BhdGNoID0+ICh7XG4gIGRpc3BhdGNoLFxuICBnZXROYW1lOiBiaW5kQWN0aW9uQ3JlYXRvcnMoTkFNRS5mZXRjaE5hbWUsIGRpc3BhdGNoKSxcbiB9KSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcbiAgICBuYW1lOiAnV1hMS2F5bGVlJyxcbiAgICBpdGVtczogW1xuICAgICAgeyBpZDogMSxcbiAgICAgICAgc3JjOiAnMS5qcGVnJyxcbiAgICAgICAgbGFiZWw6ICfonJjom5vkvqAnLFxuICAgICAgfSxcbiAgICAgIHsgaWQ6IDIsXG4gICAgICAgIHNyYzogJzIuanBlZycsXG4gICAgICAgIGxhYmVsOiAn576O5Zu96Zif6ZW/JyxcbiAgICAgIH0sXG4gICAgICB7IGlkOiAzLFxuICAgICAgICBzcmM6ICczLmpwZWcnLFxuICAgICAgICBsYWJlbDogJ+eMqee6ouWls+W3qycsXG4gICAgICB9LFxuICAgICAgeyBpZDogNCxcbiAgICAgICAgc3JjOiAnMS5qcGVnJyxcbiAgICAgICAgbGFiZWw6ICfonJjom5vkvqAnLFxuICAgICAgfSxcbiAgICAgIHsgaWQ6IDUsXG4gICAgICAgIHNyYzogJzIuanBlZycsXG4gICAgICAgIGxhYmVsOiAn576O5Zu96Zif6ZW/JyxcbiAgICAgIH0sXG4gICAgICB7IGlkOiA2LFxuICAgICAgICBzcmM6ICczLmpwZWcnLFxuICAgICAgICBsYWJlbDogJ+eMqee6ouWls+W3qycsXG4gICAgICB9LFxuICAgIF1cbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIHRleHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBjb3VudCwgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXgtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMz7pppbpobU8L2gzPlxuICAgICAgICA8aW5wdXQgdmFsdWU9eyBuYW1lIH0gb25DaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpIH0gLz5cbiAgICAgICAgPGgzPnsgYCR7bmFtZX0sSGVsbG8hYCB9PC9oMz5cblxuICAgICAgICA8aDM+cmVkdXggZGVtbzwvaDM+XG4gICAgICAgIDxkaXY+Y291bnQ6IHtjb3VudC5jb3VudH0gcHJlQ291bnQ6IHtjb3VudC5wcmVDb3VudH0gbmV4dENvdW50OiB7Y291bnQubmV4dENvdW50fTwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsgKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goQ09VTlQuYWRkQ291bnQoKSk7XG4gICAgICAgICAgfSB9PmFkZENvdW50PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsgKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goQ09VTlQucmVzZXRDb3VudCgpKTtcbiAgICAgICAgICB9IH0+cmVzZXRDb3VudDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17ICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKENPVU5ULnNldENvdW50KHtcbiAgICAgICAgICAgICAgY291bnQ6IDEwMCxcbiAgICAgICAgICAgICAgcHJlQ291bnQ6IDUwLFxuICAgICAgICAgICAgICBuZXh0Q291bnQ6IDE1MCxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9IH0+c2V0Q291bnQ8L3NwYW4+XG5cbiAgICAgICAgPGgzPnJlZHV4IGRlbW8gLSByZXF1ZXN0PC9oMz5cbiAgICAgICAgPGRpdj5uYW1lOiB7IHRoaXMucHJvcHMubmFtZS5pc0ZldGNoaW5nID8gJ2xvYWRpbmcuLi4nIDogdGhpcy5wcm9wcy5uYW1lLm5hbWUgfTwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXROYW1lKCk7XG4gICAgICAgICAgfSB9PmdldE5hbWU8L3NwYW4+XG5cbiAgICAgICAgPGgzPmNvdmVyZmxvdzwvaDM+XG4gICAgICAgIHsvKjxDb3ZlcmZsb3cgaXRlbXM9eyBpdGVtcyB9IHN0eWxlPXsgeyBtYXJnaW46ICcwIGF1dG8nLCBiYWNrZ3JvdW5kOiAnIzk5OScgfSB9IGhhc0xhYmVsIGJveFdpZHRoPXsgNTAwIH1cbiAgICAgICAgICBib3hIZWlnaHQ9eyAyNTAgfSBpdGVtV2lkdGg9eyAxMjAgfSBpdGVtSGVpZ2h0PXsgMTIwIH0gLz4qL31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9wYWdlcy9pbmRleC5qc3giXSwic291cmNlUm9vdCI6IiJ9
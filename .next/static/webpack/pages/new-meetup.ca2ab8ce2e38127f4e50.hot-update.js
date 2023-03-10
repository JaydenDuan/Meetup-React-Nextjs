webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_NextJs_Projects_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_NextJs_Projects_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_NextJs_Projects_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_NextJs_Projects_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");




var _jsxFileName = "D:\\NextJs-Projects\\06-onwards-to-a-bigger-project-starting-project\\pages\\new-meetup\\index.js",
    _this = undefined;




var NewMeetupPage = function NewMeetupPage() {
  var addMeetupHandler = /*#__PURE__*/function () {
    var _ref = Object(D_NextJs_Projects_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_NextJs_Projects_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(enteredMeetupData) {
      var response, data;
      return D_NextJs_Projects_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(enteredMeetupData, 'enteredMeetupData');
              _context.next = 3;
              return fetch('http://localhost:3000/api/new-meetup', {
                method: 'POST',
                body: JSON.stringify(enteredMeetupData),
                hearders: {
                  'Content-Type': 'application/json'
                }
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              console.log(data);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addMeetupHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onAddMeetup: addMeetupHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, _this);
};

_c = NewMeetupPage;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetupPage);

var _c;

$RefreshReg$(_c, "NewMeetupPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0dXBQYWdlIiwiYWRkTWVldHVwSGFuZGxlciIsImVudGVyZWRNZWV0dXBEYXRhIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFyZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsTUFBTUMsZ0JBQWdCO0FBQUEsNFZBQUcsaUJBQU9DLGlCQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixpQkFBWixFQUE4QixtQkFBOUI7QUFEdUI7QUFBQSxxQkFFQUcsS0FBSyxDQUFDLHNDQUFELEVBQXlDO0FBQ2pFQyxzQkFBTSxFQUFDLE1BRDBEO0FBRWpFQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsaUJBQWYsQ0FGMkQ7QUFHakVRLHdCQUFRLEVBQUM7QUFDTCxrQ0FBZTtBQURWO0FBSHdELGVBQXpDLENBRkw7O0FBQUE7QUFFakJDLHNCQUZpQjtBQUFBO0FBQUEscUJBU0pBLFFBQVEsQ0FBQ0MsSUFBVCxFQVRJOztBQUFBO0FBU2pCQyxrQkFUaUI7QUFVdkJWLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVMsSUFBWjs7QUFWdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJaLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFZQSxzQkFBTyxxRUFBQyx5RUFBRDtBQUFlLGVBQVcsRUFBRUE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FkRDs7S0FBTUQsYTtBQWdCU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3LW1lZXR1cC5jYTJhYjhjZTJlMzgxMjdmNGU1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmV3TWVldHVwRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm1cIjtcclxuY29uc3QgTmV3TWVldHVwUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBhZGRNZWV0dXBIYW5kbGVyID0gYXN5bmMgKGVudGVyZWRNZWV0dXBEYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlbnRlcmVkTWVldHVwRGF0YSwnZW50ZXJlZE1lZXR1cERhdGEnKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbmV3LW1lZXR1cCcsIHtcclxuICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGVyZWRNZWV0dXBEYXRhKSxcclxuICAgICAgICBoZWFyZGVyczp7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH07XHJcbiAgcmV0dXJuIDxOZXdNZWV0dXBGb3JtIG9uQWRkTWVldHVwPXthZGRNZWV0dXBIYW5kbGVyfT48L05ld01lZXR1cEZvcm0+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3TWVldHVwUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
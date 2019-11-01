(this["webpackJsonpludo"] = this["webpackJsonpludo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body{\n  text-align: center;\n  color: blue;\n  margin: 100px;\n\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images.jpeg */ "./src/images.jpeg");
/* harmony import */ var _images_jpeg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_jpeg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Signup */ "./src/components/Signup.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Login */ "./src/components/Login.js");
/* harmony import */ var _components_HomePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/HomePage */ "./src/components/HomePage.js");
/* harmony import */ var _components_Lobby__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Lobby */ "./src/components/Lobby.js");
/* harmony import */ var _components_Gameplay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Gameplay */ "./src/components/Gameplay.js");
/* harmony import */ var _components_components2_LobbyContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components2/LobbyContainer */ "./src/components/components2/LobbyContainer.js");
/* harmony import */ var _components_components2_StartGame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components2/StartGame */ "./src/components/components2/StartGame.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions */ "./src/actions/index.js");
var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/App.js";















class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.source = new EventSource("".concat(_constants__WEBPACK_IMPORTED_MODULE_12__["url"], "/stream"));
  }

  componentDidMount() {
    console.log('app mount');

    this.source.onmessage = event => {
      console.log('event test:', event);
      const data = JSON.parse(event.data);
      this.props.allLobbyRooms(data);
    };
  }

  render() {
    console.log('App render');
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "App-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_jpeg__WEBPACK_IMPORTED_MODULE_1___default.a,
      className: "App-logo",
      alt: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "RANDOM NUMBER GENERATOR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      component: _components_HomePage__WEBPACK_IMPORTED_MODULE_7__["default"],
      exact: true,
      path: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      component: _components_Lobby__WEBPACK_IMPORTED_MODULE_8__["default"],
      exact: true,
      path: "/lobby",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      component: _components_Signup__WEBPACK_IMPORTED_MODULE_5__["default"],
      exact: true,
      path: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      component: _components_Login__WEBPACK_IMPORTED_MODULE_6__["default"],
      exact: true,
      path: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      component: _components_components2_LobbyContainer__WEBPACK_IMPORTED_MODULE_10__["default"],
      exact: true,
      path: "/lobby",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      component: _components_components2_StartGame__WEBPACK_IMPORTED_MODULE_11__["default"],
      exact: true,
      path: "/startGame",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      component: _components_Gameplay__WEBPACK_IMPORTED_MODULE_9__["default"],
      exact: true,
      path: "/game/:id",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Made By ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Lil Nick"), " and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Sonia"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, {
  allLobbyRooms: _actions__WEBPACK_IMPORTED_MODULE_13__["allLobbyRooms"]
})(App));

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: ALL_LOBBIES, allLobbyRooms, getLobby, USER_LOGIN, CREATE_GAME, CREATE_LOBBY, CREATE_PLAYER, CREATE_LOBBYID, login, game, lobbyCreateSuccess, createLobby, createPlayer, createLobbyId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_LOBBIES", function() { return ALL_LOBBIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allLobbyRooms", function() { return allLobbyRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLobby", function() { return getLobby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGIN", function() { return USER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_GAME", function() { return CREATE_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_LOBBY", function() { return CREATE_LOBBY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PLAYER", function() { return CREATE_PLAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_LOBBYID", function() { return CREATE_LOBBYID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lobbyCreateSuccess", function() { return lobbyCreateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLobby", function() { return createLobby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlayer", function() { return createPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLobbyId", function() { return createLobbyId; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);


const ALL_LOBBIES = 'ALL_LOBBIES';
const baseUrl = 'http://localhost:4000';
function allLobbyRooms(payload) {
  return {
    type: ALL_LOBBIES,
    payload
  };
}
const getLobby = () => (dispatch, getState) => {
  console.log("getState: ", getState());
  const state = getState();
  console.log("state: ", state); // const { images } = state

  if (!getState().length) {
    superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(baseUrl, "/lobby")).then(response => {
      console.log("response-body", response.body);
      const action = allLobbyRooms(response.body);
      dispatch(action);
    }).catch(console.error);
  }
};
const USER_LOGIN = 'USER_LOGIN';
const CREATE_GAME = 'CREATE_GAME';
const CREATE_LOBBY = 'CREATE_GAME';
const CREATE_PLAYER = 'CREATE_PLAYER';
const CREATE_LOBBYID = 'CREATE_LOBBYID'; //login action

const login = (payload, history) => {
  console.log('payload test:', payload);
  console.log('history test:', history);
  history.push('/lobby');
  return {
    type: USER_LOGIN,
    payload
  };
}; //game action

const game = payload => ({
  type: CREATE_GAME,
  payload
}); //lobby action

const lobbyCreateSuccess = payload => ({
  type: CREATE_LOBBY,
  payload
});
const createLobby = data => (dispatch, getState) => {
  // const token = getState().auth;
  superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["url"], "/lobby")).send(data).then(response => {
    dispatch(lobbyCreateSuccess(response.body));
  }).catch(console.error);
}; // player action 

const playerCreateSuccess = player => ({
  type: CREATE_PLAYER,
  payload: player
});

const createPlayer = data => (dispatch, getState) => {
  superagent__WEBPACK_IMPORTED_MODULE_1___default.a.put("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["url"], "/lobby/2")).send(data).then(response => {
    console.log('RESPONSE', response.body);
    dispatch(playerCreateSuccess(response.body));
  }).catch(console.error);
}; //lobbyId ACtion 

const lobbyIdCreateSuccess = player => ({
  type: CREATE_LOBBYID,
  payload: player
});

const createLobbyId = data => (dispatch, getState) => {
  const token = getState().auth;
  superagent__WEBPACK_IMPORTED_MODULE_1___default.a.put("".concat(_constants__WEBPACK_IMPORTED_MODULE_0__["url"], "/lobby/:Id")).set("Authorization", "Bearer ".concat(token)).send(data).then(response => {
    dispatch(lobbyIdCreateSuccess(response.body));
  }).catch(console.error);
};

/***/ }),

/***/ "./src/components/Game.js":
/*!********************************!*\
  !*** ./src/components/Game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/components/Game.js";






const Game = props => {
  const _props$game = props.game,
        lobbyName = _props$game.lobbyName,
        id = _props$game.id,
        jwt = _props$game.jwt,
        Users = _props$game.Users;

  const addUserToGame = () => {
    console.log('user has been added');
    superagent__WEBPACK_IMPORTED_MODULE_3___default.a.put("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["url"], "/join/").concat(id)).set('Authorization', "Bearer ".concat(jwt)).then(res => console.log(res)).catch(console.error);
  };

  const renderButton = () => {
    if (!props.jwt) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: undefined
      }, "login to join");
    }

    if (Users.length >= 2) {
      return 'full';
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/game/".concat(id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: undefined
      }, lobbyName);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, lobbyName), renderButton(), Users && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, " players: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, Users.length)));
};

const mapStateToProps = state => {
  return {
    jwt: state.user.jwt,
    lobbies: state.lobbies
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Game));

/***/ }),

/***/ "./src/components/Gameplay.js":
/*!************************************!*\
  !*** ./src/components/Gameplay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



class Gameplay extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const _this$props = this.props,
          lobbies = _this$props.lobbies,
          match = _this$props.match;
    console.log('lobbies test:', lobbies);
    const id = match.params.id;
    console.log('id test:', id);
    const lobby = lobbies.find(lobby => lobby.id === parseInt(id));
    console.log('lobby test:', lobby);
    return lobby ? lobby.lobbyName : 'Loading...';
  }

}

function mapStateToProps(state) {
  const jwt = state.jwt,
        lobbies = state.lobbies;
  return {
    jwt,
    lobbies
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Gameplay));

/***/ }),

/***/ "./src/components/HomePage.js":
/*!************************************!*\
  !*** ./src/components/HomePage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/components/HomePage.js";




class HomePage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Signup to play")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Login to start game")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/lobby",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Game Lobby")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])()(HomePage));

/***/ }),

/***/ "./src/components/Lobby.js":
/*!*********************************!*\
  !*** ./src/components/Lobby.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _LobbyForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LobbyForm */ "./src/components/LobbyForm.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game */ "./src/components/Game.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player */ "./src/components/Player.js");
/* harmony import */ var _LobbyId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LobbyId */ "./src/components/LobbyId.js");
var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/components/Lobby.js";





 // import './lobby.css';

class Lobby extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const _this$props = this.props,
          lobbies = _this$props.lobbies,
          jwt = _this$props.jwt;
    console.log('lobbies test:', lobbies);
    const lobbyList = lobbies.map(game => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game__WEBPACK_IMPORTED_MODULE_3__["default"], {
      game: game,
      key: game.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LobbyForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "gameList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, lobbyList));
  }

}

function mapStateToProps(state) {
  return {
    lobbies: state.lobbies,
    jwt: state.game
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Lobby));

/***/ }),

/***/ "./src/components/LobbyForm.js":
/*!*************************************!*\
  !*** ./src/components/LobbyForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");
var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/components/LobbyForm.js";




class LobbyForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      lobbyName: ""
    };

    this.onChange = event => {
      this.setState({
        lobbyName: event.target.value
      });
    };

    this.onSubmit = event => {
      console.log('STATE', this.state);
      event.preventDefault();
      this.props.createLobby(this.state);
      this.setState({
        lobbyName: ""
      });
      console.log('new state', this.state.lobbyName);
    };
  }

  render() {
    console.log('new state', this.state.lobbyName);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "lobbyName",
      onChange: this.onChange,
      value: this.state.lobbyName,
      placeholder: "lobby-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "create lobby"));
  } // const [ lobbyName, setLobbyName ] = useState({ name: '' });


}

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  createLobby: _actions_index__WEBPACK_IMPORTED_MODULE_2__["createLobby"]
})(LobbyForm));

/***/ }),

/***/ "./src/components/LobbyId.js":
/*!***********************************!*\
  !*** ./src/components/LobbyId.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_asanga_codaiseur2_week7_week_7_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");
/* harmony import */ var _LobbyIdForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LobbyIdForm */ "./src/components/LobbyIdForm.js");

var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/components/LobbyId.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_home_asanga_codaiseur2_week7_week_7_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






class LobbyId extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      lobbyId: ""
    };

    this.onChange = event => {
      this.setState({
        lobbyId: event.target.values
      });
    };

    this.onSubmit = event => {
      console.log('LOBBY ID', this.state.lobbyId);
      event.preventDefault();
      this.props.createLobbyId(_objectSpread({}, this.state, {
        gameId: this.props.gameId
      }));
      this.setState({
        lobbyId: ""
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LobbyIdForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onSubmit: this.onSubmit,
      onChange: this.onChange,
      values: this.state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  createLobbyId: _actions_index__WEBPACK_IMPORTED_MODULE_3__["createLobbyId"]
})(LobbyId));

/***/ }),

/***/ "./src/components/LobbyIdForm.js":
/*!***************************************!*\
  !*** ./src/components/LobbyIdForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/components/LobbyIdForm.js";

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: props.onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Enter Lobby ID:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    value: props.values.name,
    name: "name",
    onChange: props.onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
});

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/components/Login.js";







class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      username: '',
      password: ''
    };

    this.onChangeUsername = event => {
      console.log('change username');
      this.setState({
        username: event.target.value
      });
    };

    this.onChangePassword = event => {
      console.log('change password');
      this.setState({
        password: event.target.value
      });
    };

    this.onSubmit = event => {
      event.preventDefault();
      console.log('username:', this.state.username, 'password:', this.state.password);
      superagent__WEBPACK_IMPORTED_MODULE_3__["post"]("".concat(_constants__WEBPACK_IMPORTED_MODULE_5__["url"], "/login")).send({
        email: this.state.username,
        password: this.state.password
      }).then(result => {
        console.log('please let it be token', result.body);
        console.log('this.props.history test:', this.props.history);
        console.log('jwt test:', result.body.jwt);
        this.props.login(result.body.jwt, this.props.history);
      }).catch(error => console.log("error", error));
    };
  }

  render() {
    console.log("login done", this.props);
    const jwt = this.props.user.jwt;
    if (jwt) return "you are  is logged in:";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "username",
      type: "text",
      onChange: this.onChangeUsername,
      value: this.state.username,
      placeholder: "login username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "password",
      type: "password",
      onChange: this.onChangePassword,
      value: this.state.password,
      placeholder: "Password here",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      value: this.state.message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/lobby",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Game Lobby"), " "));
  }

}

function mapStateToProps(reduxState) {
  console.log('map state to props of chatroom component', reduxState);
  return {
    user: reduxState.user
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  login: _actions_index__WEBPACK_IMPORTED_MODULE_4__["login"]
})(Login));

/***/ }),

/***/ "./src/components/Player.js":
/*!**********************************!*\
  !*** ./src/components/Player.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_asanga_codaiseur2_week7_week_7_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");
/* harmony import */ var _PlayerForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerForm */ "./src/components/PlayerForm.js");

var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/components/Player.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_home_asanga_codaiseur2_week7_week_7_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






class Player extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      player: ""
    };

    this.onChange = event => {
      this.setState({
        player: event.target.values
      });
    };

    this.onSubmit = event => {
      console.log(this.state.player);
      event.preventDefault();
      this.props.createPlayer(_objectSpread({}, this.state, {
        gameId: this.props.gameId
      }));
      this.setState({
        player: ""
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PlayerForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onSubmit: this.onSubmit,
      onChange: this.onChange,
      values: this.state.player,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  createPlayer: _actions_index__WEBPACK_IMPORTED_MODULE_3__["createPlayer"]
})(Player));

/***/ }),

/***/ "./src/components/PlayerForm.js":
/*!**************************************!*\
  !*** ./src/components/PlayerForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/components/PlayerForm.js";

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: props.onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Enter Name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    value: props.player,
    name: "player",
    onChange: props.onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
});

/***/ }),

/***/ "./src/components/Signup.js":
/*!**********************************!*\
  !*** ./src/components/Signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/components/Signup.js";



class Signup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      username: '',
      password: ''
    };

    this.onChangeUsername = event => {
      console.log('change username');
      this.setState({
        username: event.target.value
      });
    };

    this.onChangePassword = event => {
      console.log('change password');
      this.setState({
        password: event.target.value
      });
    };

    this.onSubmit = event => {
      event.preventDefault();
      console.log('username:', this.state.username, 'password:', this.state.password);
      superagent__WEBPACK_IMPORTED_MODULE_1__["post"]("".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["url"], "/user")).send({
        email: this.state.username,
        password: this.state.password
      }).then(res => {
        console.log('res', res);

        if (res.ok) {
          this.props.history.push("/login");
        }
      }).catch(error => console.log('error', error));
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "username",
      type: "text",
      onChange: this.onChangeUsername,
      value: this.state.username,
      placeholder: "Type your username here",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "password",
      type: "password",
      onChange: this.onChangePassword,
      value: this.state.password,
      placeholder: "Type your password here",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      value: this.state.message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Signup"));
  }

}

/***/ }),

/***/ "./src/components/components2/LobbyContainer.js":
/*!******************************************************!*\
  !*** ./src/components/components2/LobbyContainer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./src/components/components2/action.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/components/components2/LobbyContainer.js";




class LobbyContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      lobby: []
    };

    this.onClick = e => {
      console.log("lobby details : ", this.props.lobby);
      console.log("hello from onclick");
      this.setState({
        lobby: this.props.lobby
      });
    };
  }

  componentDidMount() {
    this.props.getLobby();
  }

  render() {
    //console.log("lobby details : ", this.props.lobby)
    const lobby = this.props.lobby; //console.log("lobby:", lobby)

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Find the complete status of the Lobby"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, " Find the status of Lobby"), this.state.lobby.map(lobby => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Lobby Id : ", lobby.id, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Lobby Name : ", lobby.lobbyName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, " Name of Player 01 : ", lobby.player1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, " Name of player 02 : ", lobby.player2), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, " status of the Lobby : ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, " ", lobby.status)));
    }));
  }

}

function mapStateToProps(state) {
  return {
    lobby: state.fetchLobby
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getLobby: _action__WEBPACK_IMPORTED_MODULE_1__["getLobby"]
})(LobbyContainer));

/***/ }),

/***/ "./src/components/components2/StartGame.js":
/*!*************************************************!*\
  !*** ./src/components/components2/StartGame.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./src/components/components2/action.js");
var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/components/components2/StartGame.js";






class StartGame extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      game: [],
      randomNum: [],
      result: ""
    };

    this.onClick = e => {
      console.log("start game state : ", this.props.player);
      console.log("start game");
      this.setState({
        game: this.props.player
      });
    };

    this.updateScore = e => {
      console.log("button is clicked");
      this.setState({
        randomNum: this.props.randomNum
      });
    };

    this.updateResult = e => {
      console.log("update the result");
      this.setState({
        result: this.props.result
      });
    };
  }

  componentDidMount() {
    this.props.getStartGame();
    this.props.getRandomNumber();
    this.props.getResult();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, " Welcome to random number Game "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, " Start Game "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, " ", this.state.game.map(player => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, " Player 1 : ", player.player1, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, " Player 2 : ", player.player2, " "));
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.updateScore,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, " Get Random Number "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, " ", this.state.randomNum.map(num => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "scores of player1 : ", num.score1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "scores of player2 :", num.score2));
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.updateResult,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, " Show me result "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, this.state.result.message))));
  }

}

function mapStateToProps(state) {
  console.log("state randomNum : ", state.randomNum);
  console.log("state of result : ", state.result);
  return {
    lobby: state.fetchLobby,
    player: state.startGame,
    randomNum: state.randomNum,
    result: state.result
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getStartGame: _action__WEBPACK_IMPORTED_MODULE_2__["getStartGame"],
  getRandomNumber: _action__WEBPACK_IMPORTED_MODULE_2__["getRandomNumber"],
  getResult: _action__WEBPACK_IMPORTED_MODULE_2__["getResult"]
})(StartGame));

/***/ }),

/***/ "./src/components/components2/action.js":
/*!**********************************************!*\
  !*** ./src/components/components2/action.js ***!
  \**********************************************/
/*! exports provided: ALL_LOBBIES, getLobby, START_GAME, getStartGame, GENERATE_RANDOM_NUM, getRandomNumber, GET_RESULT, getResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_LOBBIES", function() { return ALL_LOBBIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLobby", function() { return getLobby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_GAME", function() { return START_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartGame", function() { return getStartGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERATE_RANDOM_NUM", function() { return GENERATE_RANDOM_NUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RESULT", function() { return GET_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResult", function() { return getResult; });
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);

const ALL_LOBBIES = 'ALL_LOBBIES';
const baseUrl = 'http://localhost:4000';

function allLobbies(payload) {
  return {
    type: ALL_LOBBIES,
    payload
  };
}

const getLobby = () => (dispatch, getState) => {
  const _getState = getState(),
        lobbies = _getState.lobbies;

  if (!lobbies.length) {
    superagent__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(baseUrl, "/lobby")).then(response => {
      console.log("response-body", response.body);
      const action = allLobbies(response.body);
      dispatch(action);
    }).catch(console.error);
  }
};
const START_GAME = 'START_GAME';

function startGame(payload) {
  return {
    type: START_GAME,
    payload
  };
}

const getStartGame = () => (dispatch, getState) => {
  console.log("getState: ", getState());
  const state = getState();
  console.log("state: ", state); // const { images } = state

  if (!getState().length) {
    superagent__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(baseUrl, "/lobby/8")).then(response => {
      console.log("response-body", response.body);
      const action = startGame(response.body);
      dispatch(action);
    }).catch(console.error);
  }
};
const GENERATE_RANDOM_NUM = 'GENERATE_RANDOM_NUM';

function randomNumber(payload) {
  return {
    type: GENERATE_RANDOM_NUM,
    payload
  };
}

const getRandomNumber = () => (dispatch, getState) => {
  console.log("getState: ", getState());
  const state = getState();
  console.log("state: ", state);

  if (!getState().length) {
    superagent__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(baseUrl, "/player/8")).then(response => {
      console.log("response-body", response.body);
      const action = randomNumber(response.body);
      dispatch(action);
    }).catch(console.error);
  }
};
const GET_RESULT = 'GET_RESULT';

function result(payload) {
  return {
    type: GET_RESULT,
    payload
  };
}

const getResult = () => (dispatch, getState) => {
  console.log("getState: ", getState());
  const state = getState();
  console.log("state: ", state);

  if (!getState().length) {
    superagent__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(baseUrl, "/result/8")).then(response => {
      console.log("response-body", response.body);
      const action = result(response.body);
      dispatch(action);
    }).catch(console.error);
  }
};

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
const url = "http://localhost:4000";

/***/ }),

/***/ "./src/images.jpeg":
/*!*************************!*\
  !*** ./src/images.jpeg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/images.6c1ffadc.jpeg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/asanga/codaiseur2/week7/week-7-client/src/index.js";








react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}))), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/reducers/getResult.js":
/*!***********************************!*\
  !*** ./src/reducers/getResult.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return result; });
/* harmony import */ var _components_components2_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/components2/action */ "./src/components/components2/action.js");

function result(state = [], action = {}) {
  switch (action.type) {
    case _components_components2_action__WEBPACK_IMPORTED_MODULE_0__["GET_RESULT"]:
      console.log("GET_RESULT   state : ", state, "GET_RESULT_action.payload :", action.payload);
      return action.payload;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/reducers/user.js");
/* harmony import */ var _lobbies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lobbies */ "./src/reducers/lobbies.js");
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startGame */ "./src/reducers/startGame.js");
/* harmony import */ var _randomNum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./randomNum */ "./src/reducers/randomNum.js");
/* harmony import */ var _getResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getResult */ "./src/reducers/getResult.js");






/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  lobbies: _lobbies__WEBPACK_IMPORTED_MODULE_2__["default"],
  startGame: _startGame__WEBPACK_IMPORTED_MODULE_3__["default"],
  randomNum: _randomNum__WEBPACK_IMPORTED_MODULE_4__["default"],
  result: _getResult__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./src/reducers/lobbies.js":
/*!*********************************!*\
  !*** ./src/reducers/lobbies.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lobby; });
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");

function lobby(state = [], action = {}) {
  console.log('REDUCER VALUE', state, action.payload);

  switch (action.type) {
    case _actions_index__WEBPACK_IMPORTED_MODULE_0__["ALL_LOBBIES"]:
      return action.payload;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/randomNum.js":
/*!***********************************!*\
  !*** ./src/reducers/randomNum.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return randomNum; });
/* harmony import */ var _components_components2_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/components2/action */ "./src/components/components2/action.js");

function randomNum(state = [], action = {}) {
  switch (action.type) {
    case _components_components2_action__WEBPACK_IMPORTED_MODULE_0__["GENERATE_RANDOM_NUM"]:
      //console.log("GENERATE_RANDOM_NUM state : ", state, "GENERATE_RANDOM_NUM_action.payload :", action.payload)
      console.log("NEW_STATE", [...state, action.payload]);
      return [...state, action.payload];

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/startGame.js":
/*!***********************************!*\
  !*** ./src/reducers/startGame.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startGame; });
/* harmony import */ var _home_asanga_codaiseur2_week7_week_7_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_components2_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components2/action */ "./src/components/components2/action.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_home_asanga_codaiseur2_week7_week_7_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function startGame(state = [], action = {}) {
  switch (action.type) {
    case _components_components2_action__WEBPACK_IMPORTED_MODULE_1__["START_GAME"]:
      console.log("START_GAME_state : ", state, "START_GAME_action.payload :", action.payload); // console.log("START_GAME_NEW_STATE", [{action.payload}]);

      return [...state, _objectSpread({}, action.payload)];

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function (state = {}, action = {}) {
  switch (action.type) {
    case _actions_index__WEBPACK_IMPORTED_MODULE_0__["USER_LOGIN"]:
      return {
        jwt: action.payload
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
const enhancer = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]));
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], enhancer);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/asanga/codaiseur2/week7/week-7-client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/asanga/codaiseur2/week7/week-7-client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map
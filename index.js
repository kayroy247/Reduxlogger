"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

const reduxlogger = store => next => action => {
    console.group(action.type);
    console.log('Dispatching...: ', action);
    console.log('Next State: ', store.getState());
    console.groupEnd(action.type);
    return next(action);
};

var _default = reduxlogger;
exports.default = _default;
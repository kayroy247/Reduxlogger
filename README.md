# Redux Logger

## How to Install

`npm install reduxlogger`

## How to use

```
const reduxLogger = require('@kaysoft/reduxlogger')

const store = createStore(
rootReducer,
composeWithDevTools(applyMiddleware(thunk, reduxLogger))
);
```

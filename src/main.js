import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'



import store from './store/store'
import App from './routers/index'



ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('app'))
// ReactDOM.render(<Demo><Counter /></Demo>, document.getElementById('app'))


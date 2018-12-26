import React, {Component} from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'



import { Counter } from '../container/counter/index';
import {User} from '../container/user/index';




const routes = [
    {
        path: '/counter',
        component: Counter
    }
]

class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <BrowserRouter >
                <Switch>
                        <Route path='/' exact component={Counter}></Route>
                        <Route path='/user' component={User}></Route>
                </Switch>
                
            </BrowserRouter>
        )
    }
}

export default App
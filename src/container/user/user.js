import React, {Component} from 'react'

// const img = require('./images/tang.jpg')
import imgSrc from './images/tang.jpg'

import './user.css';

class User extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                this is User Component
                <img src={imgSrc} />
                <div className={`bg-image`}></div>
            </div>
        )
    }
}




export default User
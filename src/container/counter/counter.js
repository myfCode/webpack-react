import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props)

        this.decrease = this.decrease.bind(this)
        this.increase = this.increase.bind(this)
    }

    componentDidMount(){
        // this.props.demoAction1()

    
    }

    decrease(){
        const {count } = this.props

        
    }

    increase(){

    }

    render() {
        const {count} = this.props

        return (
            <div>
                <h1>Counter component</h1>
                {/* <button onClick={this.decrease} class="decrease">-</button>
                <span>{count.num}</span>
                <button onClick={this.increase} class="increase">+</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        demoAction1: () => dispatch(demoAction1()),
        increaseAction: () => dispatch(increaseAction()),
        decreaseAction: () => dispatch(decreaseAction())
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default Counter
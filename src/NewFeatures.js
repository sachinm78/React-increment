import React, {Component} from "react"

class NewJSFeatures extends Component {
    state = {
        count: 0
    }

    // constructor can be replaced with the above when using arrow functions
    // constructor() {
    //     super()
    //     this.state = {
    //         count: 0
    //     }
        // no need to use bind statement when writing arrow functions
        // this.increment = this.increment.bind(this)
        // this.decrement = this.decrement.bind(this)

    // written with arrow function
    // return is implicit so it can also be simplified as follows
    increment = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    
    // written without arrow function
    // increment() {
    //     this.setState(prevState => {
    //         return {
    //             count: prevState.count + 1
    //         }
    //     })
    // }

    // written with arrow function but without implicit return
    decrement = () => {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>    
        )
    }
}

export default NewJSFeatures
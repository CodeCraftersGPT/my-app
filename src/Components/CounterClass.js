import React,{Component} from 'react';

class CounterClass extends Component{
    constructor(){
        super();
        this.state = {
            count:0,
        }
    }

    incrementCount = ()=>{
        // prevstate and currentstate
        // 0 => 1
        // 0 =>1 ( you area skign 1.previous state is 0)
        this.setState({count:this.state.count+1});// you are passing the new object . you are not modifying the existing object
    }

    render(){
        return (
            <>
                <h1>Counter value is {this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
            </>
        )
    }
}

export default CounterClass;

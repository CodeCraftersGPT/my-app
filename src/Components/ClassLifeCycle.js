import React,{Component} from "react";

class LifeCycle extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: "This is a class component with lifecycle methods."
        }

        console.log("Constructor called");
    }

    componentDidMount(){
        console.log("Component did mount");
    }

    componentDidUpdate   (prevProps,prevState){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render(){
        console.log('Render method is called.')
        return(
            <div>
                <h1>Class with lifecycle component methods</h1>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.setState({message:"Message is changed"})}>Change Message</button>
            </div>
        )
    }

}

export default LifeCycle;
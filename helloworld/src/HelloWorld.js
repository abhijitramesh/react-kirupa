import { render } from "@testing-library/react";
import React,{Component} from "react";
import "./HelloWorld.css"

class HelloWorld extends Component{
    render(){
        return(
            <div className="helloContianer">
                <h1>Hello World</h1>
            </div>
        );
    }
}

export default HelloWorld;
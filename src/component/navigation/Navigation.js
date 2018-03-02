import React, {Component} from "react";


export default class Navigation extends Component{
    constructor(props){
        super(props);

        this.state = {
          isClicked1: false,
            isClicked2: false,
            isClicked3: false
        };

    }



    render(){
        return(
            <div>
                <nav>
                    <ul className="nav">
                        { this.state.isClicked1 ? <li style={{backgroundColor: "blue"}} onClick={this.onClick1.bind(this)}>Home</li> : <li style={{backgroundColor: "none"}} onClick={this.onClick1.bind(this)}>Home</li>}
                        { this.state.isClicked2 ? <li style={{backgroundColor: "blue"}} onClick={this.onClick2.bind(this)}>Home</li> : <li style={{backgroundColor: "none"}} onClick={this.onClick2.bind(this)}>Home</li>}
                        { this.state.isClicked3 ? <li style={{backgroundColor: "blue"}} onClick={this.onClick3.bind(this)}>Home</li> : <li style={{backgroundColor: "none"}} onClick={this.onClick3.bind(this)}>Home</li>}
                    </ul>
                </nav>

                <hr/>




            </div>




        );
    }

    onClick1(){

        this.setState({
            isClicked1: !this.state.isClicked1
        });

    }

    onClick2(){

        this.setState({
            isClicked2: !this.state.isClicked2
        });

    }

    onClick3(){

        this.setState({
            isClicked3: !this.state.isClicked3
        });

    }


}
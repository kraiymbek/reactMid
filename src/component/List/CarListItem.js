import React, {Component} from 'react';



export default class CarListItem  extends Component {

    constructor(props){
        super(props);

        this.state = {
            isClicked : false
        };

    }














        render()
        {
            return (
                <tr>
                    {this.props.isClicked ? <td className="listItem" style={{backgroundColor: "blue"}} onClick={this.props.onClickItem.bind(this,this.props)}>{this.props.name} - {this.props.price}</td> : <td className="listItem" style={{backgroundColor: "white"}} onClick={this.props.onClickItem.bind(this,this.props)}>{this.props.name} - {this.props.price}</td>}
                </tr>
            );
        }


    onClickItem(){
        let clicked = this.state.isClicked;

        clicked = !clicked;


        this.setState({
            isClicked: clicked
        });
    }


}



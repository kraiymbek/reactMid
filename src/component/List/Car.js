import React, {Component} from 'react';
import CarList from "./CarList";


const cars = [
    {
        name: "Mercedes E class",
        price: "65000"
    },
    {
        name: "BMW 750",
        price: "80000"
    },
    {
        name: "Lexus LX",
        price: "150000"
    },
    {
        name: "Dodge",
        price: "40000"
    }
];


export default class Car  extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cars,
            count: 0
        };

    }


    render() {
        return (
            <div className="">
                <h2>Car List</h2>
                <CarList cars = {this.state.cars} onClickItem = {this.onClickItem.bind(this)}/>
            </div>
        );
    }


    onClickItem(item){

        this.state.count += parseInt(item.price);



        this.setState({
            count: this.state.count
        });

        console.log(this.state.count)
    }
}



import React, {Component} from 'react';
import CarListItem from "./CarListItem";



export default class CarList  extends Component {


    showCars() {
        return this.props.cars.map((car, index) =>
            <CarListItem key={index} {...car} {...this.props}/>
        )
    }


    render()
    {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Name : Amount</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.showCars()}
                    </tbody>
                </table>

                Amount: {this.props.count}

            </div>
        );
    }


}



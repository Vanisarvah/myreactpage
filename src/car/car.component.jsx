import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Car extends Component {
    render(){

      var letterStyle = {
             padding: 10,
             margin: 10,
             backgroundColor: "White"
         };


      console.log(this.props);
        // Get data from route props
        const cars = this.props.data;
        // Map through cars and return linked cars
        const carNode = cars.map((car) => {
            return (
                 <Link
                    to={"/computers/"+car.id}
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
                </Link>
            )
        });
        return (
          <div style={letterStyle}>
                <h1>Computers  List</h1>
                                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    }
}

export default Car

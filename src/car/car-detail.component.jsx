import React, { Component } from 'react';

class CarDetail extends Component {
    render(){

            var letterStyle = {
                   padding: 10,
                   margin: 10,
                   backgroundColor: "White"
               };

        // Car array
        const cars = this.props.data;
        // Car Id from param
        const id = this.props.match.params.id;
        // Filter car with ID
        const car = cars.filter(car => {
            if(car.id == id) {
                return car;
            }
        });

        return (

          <div style={letterStyle}>

            <div>

                <h1>{car[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={car[0].media} alt={car[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                       <li><strong>Brand</strong>: {car[0].brand}</li>
                       <li><strong>Capacity</strong>: {car[0].capacity}</li>
                       <li><strong>Make</strong>: {car[0].make}</li>
                       <li><strong>Resolution</strong>: {car[0].resolution}</li>
                       <li><strong>Price</strong>: {car[0].price}</li>
                       </ul>
                    </div>
                </div>
            </div>

          </div>
        );
    }
}

export default CarDetail

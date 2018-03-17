import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
//import {Router, Route} from 'react-router';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

// Import custom components
import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'


var data = [{
    id: 1,
    name: 'Hp',
    media: 'https://i03.hsncdn.com/is/image/HomeShoppingNetwork/prodgrid/hp-stream-14-intel-4gb-ram-64gb-emmc-laptop-with-1-year-d-20171220114759793~596823_404.jpg',
    brand:"HP",
    capacity:"56Gb",
    make: 'United States',
    resolution:"3840 x 2160",
    price: 'Rs 75000'

}, {
    id: 2,
    name: 'acer',
    make: 'Taiwan',
    media: 'http://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/Acer_Aspire_E1_431_B9602G50Mn/Acer_Aspire_E1_431_B9602G50Mn_L_1.jpg',
    price: 'Rs 82000',
    brand:"Acer",
    capacity:"64Gb",
    resolution:"3840 x 2160"



}, {
    id: 3,
    name: 'Dell',
    make: 'United States',
    media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaU_aY9dkC4er4zQXNI5v8RBU0TREfqp5QjWUBe1uCTs4sRnlgnw',
    price: 'Rs 78000',
    brand:"Dell",
    capacity:"64Gb",
    resolution:"3840 x 2160"

}, {
    id: 4,
    name: 'lenova',
    make: 'China',
    media: 'https://betanews.com/wp-content/uploads/2017/09/lenovo-laptop-logo.jpg',
    price: 'Rs 86000',
    brand:"Lenova",
    capacity:"72Gb",
    resolution:"3840 x 2160"


}, {
    id: 5,
    name: 'Apple lnc',
    make: 'United States',
    media: 'https://ae01.alicdn.com/kf/HTB1Lh0DNXXXXXbXXXXXq6xXFXXXy/For-apple-air-13-Frosted-Matte-Ranbow-color-Laptop-Hard-Case-Cover-for-pro-13-retina.jpg',
    price: 'Rs 100000',
    brand:"Apple lnc",
    capacity:"72Gb",
    resolution:"3840 x 2160"

}];
render(
    <BrowserRouter>

      <Main>
            <Route exact path="/react-app" component={Home}/>
            <Route path="/computers" render={(props) => (<Car {...props} data={data}/>)}/>
            <Route path="/computers/:id" render={(props) => (<CarDetail {...props} data={data}/>)}/>
            <Route path="/about" component={About}/>
      </Main>

    </BrowserRouter>,
    document.getElementById('container')
);

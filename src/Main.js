import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Health from "./Health";
import Contact from "./Contact";
import Pickup from "./Pickup";
import Resturants from "./Resturant";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
          <div class="header">
             <h1>Postmates</h1>
             <p>Order Anything from Anywhere</p>
          </div>
          <div>
          <ul className="header">
            <li><NavLink exact to="/">Resturants</NavLink></li>
            <li><NavLink to="/Health">Health and Beauty</NavLink></li>
            <li><NavLink to="/Pickup">In-store Pickup</NavLink> </li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            
          </ul>
          <div className="content">
            <Route exact path="/" component={Resturants}/>
            <Route path="/Health" component={Health}/>
            <Route path="/Pickup" component={Pickup}/>
            <Route path="/contact" component={Contact}/>
            
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './Header';
import Footer from './Footer';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail  from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leader';

import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        leaders:LEADERS,
        promotions:PROMOTIONS,
        comments:COMMENTS
    };
  }

  

  render() {
   

      const HomePage = () => {
        return(
          <Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
        );
      }
        const DishwithID=({match})=>{
          return(
            <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
          );
        }
        
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/menu/:dishId' component={DishwithID}/>
              <Route exact path='/contactus' component={Contact} />
              <Route exact path='/aboutus' component={()=><About leaders={this.state.leaders}/>}/>
              <Redirect to='/home' />
          </Switch>
        <Footer/>
      </div>
      
    );
  }
}

export default Main;
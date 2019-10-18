import * as ActionTypes from './ActionTypes';

import {baseUrl} from '../shared/baseUrl';

 export const addComment=(dishId,rating,author,comment)=>(
    { type: ActionTypes.ADD_COMMENT,
        payload:{
          dishId:dishId,
          rating:rating,
          author:author,
          comment:comment
        }
    }
);
  export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesloading(true));
   return fetch(baseUrl+'dishes')
   .then(response=>response.json())
   .then(dishes=>dispatch(addDishes(dishes)));
    }
  export const dishesloading=()=>({
 type:ActionTypes.DISHES_LOADING
  });

  export const dishesFailed=(errmess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
  });

  export const addDishes=(dishes)=>(
    {
      type:ActionTypes.ADD_DISHES,
    payload:dishes
    }
  );

  export const fetchComments=()=>(dispatch)=>{
   return fetch(baseUrl+'comments')
   .then(response=>response.json())
   .then(comments=>dispatch(addcomments(comments)));
    }
    export const commentsFailed=(errmess)=>({
      type:ActionTypes.COMMENTS_FAILED,
      payload:errmess
    });
    export const addcomments=(comments)=>(
      {
        type:ActionTypes.ADD_COMMENTS,
      payload:comments
      }
    );

    export const fetchPromos=()=>(dispatch)=>{
      dispatch(promosloading());
     return fetch(baseUrl+'promotions')
     .then(response=>response.json())
     .then(promos=>dispatch(addpromos(promos)));
      }
    export const promosloading=()=>({
   type:ActionTypes.PROMOS_LOADING
    });
  
    export const promosFailed=(errmess)=>({
      type:ActionTypes.PROMOS_FAILED,
      payload:errmess
    });
  
    export const addpromos=(promos)=>(
      {
        type:ActionTypes.ADD_PROMOS,
      payload:promos
      }
    );
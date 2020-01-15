import * as ActionTypes from './ActionTypes';

import {baseUrl} from '../shared/baseUrl';

export const addComment=(comment)=>(
  { type: ActionTypes.ADD_COMMENT,
      payload:comment
      
  }
);
export const addFeedback=(feedback)=>(
  { type: ActionTypes.ADD_FEEDBACK,
      payload:feedback
      
  }
);

 export const postcomment=(dishId,rating,author,comment)=>(dispatch)=>
    {
      const newcomment={
          dishId:dishId,
          rating:rating,
          author:author,
          comment:comment
        };
    
    newcomment.date=new Date().toISOString();
    return fetch(baseUrl+'comments',{
      method:"POST",
      body:JSON.stringify(newcomment),
      headers: {
        "Content-Type": "application/json"
      },
      credentials:"same-origin"
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addComment(response)))
  .catch(error =>  { console.log('post comments', error.message);
   alert('Your comment could not be posted\nError: '+error.message); });
  };
  export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesloading(true));
    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
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
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addcomments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};
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
      return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addpromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
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


    export const fetchLeaders=()=>(dispatch)=>{
      dispatch(leadersloading());
      return fetch(baseUrl + 'leaders')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(leaders => dispatch(addleaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}
    export const leadersloading=()=>({
   type:ActionTypes.LEADERS_LOADING
    });
  
    export const leadersFailed=(errmess)=>({
      type:ActionTypes.LEADERS_FAILED,
      payload:errmess
    });
  
    export const addleaders=(leaders)=>(
      {
        type:ActionTypes.ADD_LEADERS,
      payload:leaders
      }
    );

    export const postFeedback=(id,firstname,lastname,telnum,email,agree,message,contactType)=>(dispatch)=>
    {
      const newfeedback={
          id:id,
          firstname:firstname,
          lastname:lastname,
          telnum:telnum,
          email:email,
          agree:agree,
          message:message,
          contactType:contactType
        };
    
    newfeedback.date=new Date().toISOString();
    return fetch(baseUrl+'feedback',{
      method:"POST",
      body:JSON.stringify(newfeedback),
      headers: {
        "Content-Type": "application/json"
      },
      credentials:"same-origin"
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addFeedback(response)))
  .catch(error =>  { console.log('post feedbacks', error.message);
   alert('Your comment could not be posted\nError: '+error.message); });
  };
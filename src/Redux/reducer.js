
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leader';


export const initialState= {
    
        dishes: DISHES,
        leaders:LEADERS,
        promotions:PROMOTIONS,
        comments:COMMENTS
    };

export const Reducer=(state=initialState,action)=>{return state;};
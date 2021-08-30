import createDataContext from './createDataContext';
import { dishesData } from '../constants/DishesData';

const dishReducer = (state, action) => {
    switch (action.type) {
        case 'get_dishes':
            return action.payload;
        case 'add_comment':
            state[action.id].dishDetails.push(action.comment)
            console.log(state[action.id].dishDetails)
            return state
        default:
            return state;
    }
};

const getDishes = dispatch => {
    return async () => {
        dispatch({ type: 'get_dishes', payload: dishesData });
      };
};

const addComment = dispatch => {
    return async (id, comment) => {
        dispatch({ type: 'add_comment', id: id, comment: comment });
    };
};

export const { Context, Provider } = createDataContext(
    dishReducer,
    { addComment, getDishes },
    []
);

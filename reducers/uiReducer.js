import types from '../types/types';

const initialState = {
    articleOpen: false
}

const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.uiOpenArticle:
            return {
                ...state,
                articleOpen: true
            }
        
        case types.uiCloseArticle:
            return {
                ...state,
                articleOpen: false
            }
    
        default:
            return state;
    }

}

export default uiReducer;
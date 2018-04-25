import {homeActions} from "../actions/home";

const initialState = {
    loadingCoupons: true,
    errorCoupons: false,
    coupons: [],
    loadingShops: true,
    errorShops: false,
    shops: [],
    loadingCategories: true,
    errorCategories: false,
    categories: [],
};

export default function homeReducer(state = initialState, action) {
    switch (action.type) {

        case homeActions.FETCH_COUPONS_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loadingCoupons: true,
                errorCoupons: false
            };
        case homeActions.FETCH_COUPONS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loadingCoupons: false,
                errorCoupons: false,
                coupons: action.payload
            };
        case homeActions.FETCH_COUPONS_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the errorCoupons, and we can display it somewhere
            return {
                ...state,
                loadingCoupons: false,
                errorCoupons: true,
            };

        case homeActions.FETCH_SHOPS_BEGIN:
            return {
                ...state,
                loadingShops: true,
                errorShops: false
            };
        case homeActions.FETCH_SHOPS_SUCCESS:
            return {
                ...state,
                loadingShops: false,
                errorShops: false,
                shops: action.payload
            };
        case homeActions.FETCH_SHOPS_FAILURE:
            return {
                ...state,
                loadingShops: false,
                errorShops: true,
            };

        case homeActions.FETCH_CATEGORIES_BEGIN:
            return {
                ...state,
                loadingCategories: true,
                errorCategories: false
            };
        case homeActions.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                loadingCategories: false,
                errorCategories: false,
                categories: action.payload
            };
        case homeActions.FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                loadingCategories: false,
                errorCategories: true,
            };

        default:
            // ALWAYS have a default case in a reducer
            return state
    }
}
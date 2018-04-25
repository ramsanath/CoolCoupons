import {AppRepo, HomeRepo} from "../../data/repo";

export const homeActions = {
    FETCH_COUPONS_BEGIN: "FETCH_COUPONS_BEGIN",
    FETCH_COUPONS_SUCCESS: "FETCH_COUPONS_SUCCESS",
    FETCH_COUPONS_FAILURE: "FETCH_COUPONS_FAILURE",
    FETCH_SHOP: "FETCH_SHOP",
    FETCH_SHOP_SUCCESS: "FETCH_SHOP",
    FETCH_SHOPS_BEGIN: "FETCH_SHOPS_BEGIN",
    FETCH_SHOPS_SUCCESS: "FETCH_SHOPS_SUCCESS",
    FETCH_SHOPS_FAILURE: "FETCH_SHOPS_FAILURE",
    FETCH_CATEGORIES_BEGIN: "FETCH_CATEGORIES_BEGIN",
    FETCH_CATEGORIES_SUCCESS: "FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_FAILURE: "FETCH_CATEGORIES_FAILURE",
};

export function fetchCouponsBegin() {
    return {type: homeActions.FETCH_COUPONS_BEGIN};
}

export function fetchCouponsSuccess(data) {
    return {
        type: homeActions.FETCH_COUPONS_SUCCESS,
        payload: data
    };
}

export function fetchCouponsFailure(error) {
    return {type: homeActions.FETCH_COUPONS_FAILURE, payload: error};
}

export function fetchCoupons() {
    return dispatch => {
        dispatch(fetchCouponsBegin());
        return HomeRepo.getTopNCouponsShops(10)
            .then(coupons => {
                dispatch(fetchCouponsSuccess(coupons))
            })
            .catch(error => {
                dispatch(fetchCouponsFailure(error))
            });
    };
}


export function fetchShopsBegin() {
    return {type: homeActions.FETCH_SHOPS_BEGIN};
}

export function fetchShopsSuccess(data) {
    return {
        type: homeActions.FETCH_SHOPS_SUCCESS,
        payload: data
    };
}

export function fetchShopsFailure(error) {
    return {type: homeActions.FETCH_SHOPS_FAILURE, payload: error};
}

export function fetchShops() {
    return dispatch => {
        dispatch(fetchShopsBegin());
        return HomeRepo.getTopShops(10)
            .then(shops => {
                dispatch(fetchShopsSuccess(shops))
            })
            .catch(error => {
                dispatch(fetchShopsFailure(error))
            });
    };
}


export function fetchCategoriesBegin() {
    return {type: homeActions.FETCH_CATEGORIES_BEGIN};
}

export function fetchCategoriesSuccess(data) {
    return {
        type: homeActions.FETCH_CATEGORIES_SUCCESS,
        payload: data
    };
}

export function fetchCategoriesFailure(error) {
    return {type: homeActions.FETCH_CATEGORIES_FAILURE, payload: error};
}

export function fetchCategories() {
    return dispatch => {
        dispatch(fetchCategoriesBegin());
        return HomeRepo.getCategories(10)
            .then(categories => {
                dispatch(fetchCategoriesSuccess(categories))
            })
            .catch(error => {
                dispatch(fetchCategoriesFailure(error))
            });
    };
}

export function fetchShopData(shopId) {
    return dispatch => {
        AppRepo.getShop(shopId)
            .then(shop => dispatch(fetchShopDataSuccess(shop)));
    }
}

export function fetchShopDataSuccess(shop) {
    return {
        type: homeActions.FETCH_SHOP_SUCCESS,
        payload: shop
    }
}


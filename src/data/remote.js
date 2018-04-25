import * as firebase from 'firebase';
import {config} from "../../config";
import {timestamp} from "../commons/util";

require("firebase/firestore");


firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

const coupons = "coupons";
const tags = "tags";
const shops = "shops";
const addedOn = "addedOn";
const expiresOn = "expiresOn";
const categories = 'categories';


/**
 * Fetches the n latest non-expired coupons.
 *
 * WARN: Due to firebase cloud firestore limitations the query does not fetch the latest
 * coupons. Should rectify this or find a new way to achieve the intent.
 *
 * @param n
 * @returns {Promise<firebase.firestore.QuerySnapshot>}
 */
export function getLastNCoupons(n) {
    const now = timestamp();
    const couponsRef = db.collection(coupons);

    return couponsRef
        .where(expiresOn, ">", now)
        // .orderBy(addedOn, "desc")
        .limit(n)
        .get();
}


/**
 * Gets N popular shopImages from the database
 *
 * @returns {Promise<firebase.firestore.QuerySnapshot>}
 */
export function getShops(n) {
    const shopsRef = db.collection(shops);
    return shopsRef
        .orderBy('popularity', "desc")
        .limit(n)
        .get();
}

export function getShop(shopId) {
    const shopsRef = db.collection(shops);
    return shopsRef
        .where("id", "==", shopId)
        .limit(1)
        .get();
}

/**
 * Returns a promise that fetches categories list
 * @param n
 * @returns {Promise<firebase.firestore.QuerySnapshot>}
 */
export function getCategories(n) {
    const catRef = db.collection(categories);
    return catRef
        .limit(n)
        .get();
}


export function getCoupon(id) {
    const couponsRef = db.collection(coupons);
    return couponsRef
        .where('id', '==', id)
        .get();
}
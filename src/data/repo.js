import {getLastNCoupons, getShop, getShops, getCategories} from "./remote";
import {cache, getCachedData} from "./cache";
import {snapshotToArray} from "../commons/util";
import _ from 'lodash';


export const AppRepo = {
    /**
     * Gets the shop data for the shop id from cache if available or fetches
     * the shop data from remote and then returns after caching it.
     *
     * @param shopId
     * @returns {Promise<*>}
     */
    getShop: async function (shopId) {
        let shop;

        shop = await getCachedData(`shops.${shopId}`);

        if (shop) {
            return shop;
        } else {
            shop = getShop(shopId)
                .then(snapshot => snapshotToArray(snapshot)[0])
                .then(shop => {
                    cache(`shops.${shop.id}`, shop);
                    return shop;
                });
            return shop;
        }
    }
};

export const HomeRepo = {
    getTopNCoupons: async function (n) {
        const data = await getLastNCoupons(n)
            .then(snapshot => snapshotToArray(snapshot));

        //  cache the fetched data.
        data.forEach((coupon) => cache(`coupons.${coupon.id}`, coupon));

        return data;
    },

    getTopShops: async function(n) {
        const data = await getShops(n)
            .then(snapshot => snapshotToArray(snapshot));

        //  cache the fetched data.
        data.forEach((shop) => cache(`shops.${shop.id}`, shop));
        return data;
    },

    getCategories: async function(n) {
        const cats = await getCategories(n)
            .then(snapshot => snapshotToArray(snapshot))
        return cats;
    }

};
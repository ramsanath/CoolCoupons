import {getCoupon, getLastNCoupons, getShop, getShops, getCategories} from "./remote";
import {cache, getCachedData} from "./cache";
import {snapshotToArray} from "../commons/util";


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
            return getShop(shopId)
                .then(snapshot => snapshotToArray(snapshot)[0])
                .then(shop => {
                    cache(`shops.${shop.id}`, shop);
                    return shop;
                })
                .catch(error => undefined);
        }
    },

    getCoupon: async function(couponId) {
        let coupon;
        coupon = await getCachedData(`coupons.${couponId}`);

        if (coupon) {
            return coupon;
        } else {
            return getCoupon(couponId)
                .then(snapshot => snapshotToArray(snapshot)[0])
                .then(coupon => {
                    cache(`coupons.${coupon.id}`, coupon);
                    return coupon;
                })
                .catch(error => undefined);
        }

    },

    getCouponWithShop: async function(id) {
        const coupon = await this.getCoupon(id);
        const shop = await this.getShop(coupon.shop.id);
        coupon.shop = shop;
        return coupon;
    }

};

export const HomeRepo = {
    getTopNCouponsShops: async function (n) {
        const data = await getLastNCoupons(n)
            .then(snapshot => snapshotToArray(snapshot))
            .catch(error => []);

        //  cache the fetched data.
        data.forEach(coupon => cache(`coupons.${coupon.id}`, coupon));

        // this is literally a bad idea but here goes.
        // get the shop data for each of the coupon and add it
        // inside the coupon data.
        // Lets just assume that we are using a relational db and using a inner join.
        // This will make life more easier.
        for (let i in data) {
            let shop = await AppRepo.getShop(data[i].shop.id);
            data[i].shop = shop;
        }

        return data;
    },

    getTopShops: async function(n) {
        const data = await getShops(n)
            .then(snapshot => snapshotToArray(snapshot))
            .catch(error => []);

        //  cache the fetched data.
        data.forEach((shop) => cache(`shops.${shop.id}`, shop));
        return data;
    },

    getCategories: async function(n) {

        // cats = categories
        const cats = await getCategories(n)
            .then(snapshot => snapshotToArray(snapshot))
            .catch(error => []);
        return cats;
    }
};
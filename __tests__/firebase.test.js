import {getLastNCoupons, getShops} from "../src/data/remote";
import {HomeRepo, AppRepo} from "../src/data/repo";
import {snapshotToArray} from "../src/commons/util";


test('should retrieve at least 1 latest non expired coupons', async () => {
    const snapshot = await getLastNCoupons(10);
    const resArr = snapshotToArray(snapshot);
    expect(resArr.length).toBeGreaterThan(1);
});


test('should retrieve 10 shops ordered by their popularity', async () => {
    const snapshot = await getShops(10);
    const resArr = snapshotToArray(snapshot);
    expect(resArr.length).toBeGreaterThan(1);
});

test('should retrieve a shop from database', async () => {
    const shop = await AppRepo.getShop(1);
    expect(shop).toBeTruthy();
    expect(shop.name).toEqual('Domino\'s Pizza');
});

test('should retrieve the coupons along with the respective shop data', async () => {
    const couponsWithShops = await HomeRepo.getTopNCouponsShops(1);
    expect(couponsWithShops[0].shop.image).toBeTruthy();
});

test('should get N categories', async () => {
    const categories = await HomeRepo.getCategories(1);
    expect(categories.length).toEqual(1);
});
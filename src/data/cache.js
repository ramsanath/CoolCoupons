import {AsyncStorage} from 'react-native';
import _ from 'lodash';


const CACHE = 'CACHE';

export async function cache(path, value) {
    let cacheObj = await getCacheObj();
    if (!_.isObject(cacheObj)) {
        cacheObj = {};
    }
    _.set(cacheObj, path, value);
    await setCacheObj(cacheObj);
}

export async function getCachedData(pathToValue) {
    let cacheObj = await getCacheObj();
    return _.get(cacheObj, pathToValue, undefined);
}

async function getCacheObj() {
    const cacheObj = await AsyncStorage.getItem(CACHE);
    return JSON.parse(cacheObj);
}

async function setCacheObj(obj) {
    let objJSON = JSON.stringify(obj);
    await AsyncStorage.setItem(CACHE, objJSON);
}
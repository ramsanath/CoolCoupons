import {Platform} from 'react-native';
import { human, material } from 'react-native-typography';



/**
 *
 * Returns the icon name for the appropriate platform.
 *
 * The icon names in Ionicons will be of the structure
 * '[ios/md]-icon-name'
 *  Example: add-circle
 *  For ios  will be -> ios-add-circle
 *  For android will be -> md-add-circle
 *
 * @param icon
 */
export function getIconNameForPlatform(iconName, focused) {
    if (Platform.OS == 'ios') {
        return `ios-${iconName}${focused ? '' : '-outline'}`
    } else {
        return `md-${iconName}`;
    }
}


export function getMaterial(name) {
    const fontColor = 'black';
    return fontColor == 'white' ? material[`${name}White`] : material[name];
}

export function getHuman(name) {
    const fontColor = 'black';
    return fontColor == 'white' ? human[`${name}White`] : human[name];
}
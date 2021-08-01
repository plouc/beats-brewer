import { Skin } from './definitions'
import { flatSkin } from './flat/flatSkin'
import { racksSkin } from './racks/racksSkin'
import { rawSkin } from './raw/rawSkin'
import { darkTheme } from '../theme/darkTheme'
import { lightTheme } from '../theme/lightTheme'
import { blackTheme } from '../theme/blackTheme'
import { monoBlueTheme } from '../theme/monoBlueTheme'
import { monoPinkTheme } from '../theme/monoPinkTheme'
import { monoRedTheme } from '../theme/monoRedTheme'
import { monoYellowTheme } from '../theme/monoYellowTheme'
import { convertToRawTheme } from '../theme/convertToRawTheme'

export const skins: Skin[] = [
    {
        ...racksSkin,
        id: 'racks:dark',
        name: 'Dark',
        theme: darkTheme,
    },
    {
        ...flatSkin,
        id: 'flat:dark',
        name: 'Dark Flat',
        theme: darkTheme,
    },
    {
        ...rawSkin,
        id: 'raw:dark',
        name: 'Dark Raw',
        theme: convertToRawTheme(darkTheme),
    },
    {
        ...racksSkin,
        id: 'racks:light',
        name: 'Light',
        theme: lightTheme,
    },
    {
        ...flatSkin,
        id: 'flat:light',
        name: 'Light Flat',
        theme: lightTheme,
    },
    {
        ...rawSkin,
        id: 'raw:light',
        name: 'Light Raw',
        theme: convertToRawTheme(lightTheme),
    },
    {
        ...racksSkin,
        id: 'racks:black',
        name: 'Black',
        theme: blackTheme,
    },
    {
        ...flatSkin,
        id: 'flat:black',
        name: 'Black Flat',
        theme: blackTheme,
    },
    {
        ...rawSkin,
        id: 'raw:black',
        name: 'Black Raw',
        theme: convertToRawTheme(blackTheme),
    },
    {
        ...racksSkin,
        id: 'racks:blue',
        name: 'Blue',
        theme: monoBlueTheme,
    },
    {
        ...flatSkin,
        id: 'flat:blue',
        name: 'Blue Flat',
        theme: monoBlueTheme,
    },
    {
        ...rawSkin,
        id: 'raw:blue',
        name: 'Blue Raw',
        theme: convertToRawTheme(monoBlueTheme),
    },
    {
        ...racksSkin,
        id: 'racks:pink',
        name: 'Pink',
        theme: monoPinkTheme,
    },
    {
        ...flatSkin,
        id: 'flat:pink',
        name: 'Pink Flat',
        theme: monoPinkTheme,
    },
    {
        ...rawSkin,
        id: 'raw:pink',
        name: 'Pink Raw',
        theme: convertToRawTheme(monoPinkTheme),
    },
    {
        ...racksSkin,
        id: 'racks:red',
        name: 'Red',
        theme: monoRedTheme,
    },
    {
        ...flatSkin,
        id: 'flat:red',
        name: 'Red Flat',
        theme: monoRedTheme,
    },
    {
        ...rawSkin,
        id: 'raw:red',
        name: 'Red Raw',
        theme: convertToRawTheme(monoRedTheme),
    },
    {
        ...racksSkin,
        id: 'racks:yellow',
        name: 'Yellow',
        theme: monoYellowTheme,
    },
    {
        ...flatSkin,
        id: 'flat:yellow',
        name: 'Yellow Flat',
        theme: monoYellowTheme,
    },
    {
        ...rawSkin,
        id: 'raw:yellow',
        name: 'Yellow Raw',
        theme: convertToRawTheme(monoYellowTheme),
    },
].filter((skin) => skin.id.startsWith('raw:') === false)

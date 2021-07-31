import { Skin } from './definitions'
import { flatSkin } from './flat/flatSkin'
import { racksSkin } from './racks/racksSkin'
import { darkTheme } from '../theme/darkTheme'
import { lightTheme } from '../theme/lightTheme'
import { blackTheme } from '../theme/blackTheme'
import { monoBlueTheme } from '../theme/monoBlueTheme'
import { monoPinkTheme } from '../theme/monoPinkTheme'
import { monoRedTheme } from '../theme/monoRedTheme'
import { monoYellowTheme } from '../theme/monoYellowTheme'

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
]

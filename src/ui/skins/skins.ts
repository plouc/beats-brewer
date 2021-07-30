import { Skin } from './definitions'
import { flatSkin } from './flat/flatSkin'
import { racksSkin } from './racks/racksSkin'
import { darkTheme } from '../theme/darkTheme'
import { lightTheme } from '../theme/lightTheme'
import { monoBlueTheme } from '../theme/monoBlueTheme'
import { monoPinkTheme } from '../theme/monoPinkTheme'
import { monoRedTheme } from '../theme/monoRedTheme'
import { monoYellowTheme } from '../theme/monoYellowTheme'

export const skins: Skin[] = [
    {
        ...racksSkin,
        id: 'racks:dark',
        name: 'Racks Dark',
        theme: darkTheme,
    },
    {
        ...racksSkin,
        id: 'racks:light',
        name: 'Racks Light',
        theme: lightTheme,
    },
    {
        ...racksSkin,
        id: 'racks:blue',
        name: 'Racks Blue',
        theme: monoBlueTheme,
    },
    {
        ...racksSkin,
        id: 'racks:pink',
        name: 'Racks Pink',
        theme: monoPinkTheme,
    },
    {
        ...racksSkin,
        id: 'racks:red',
        name: 'Racks Red',
        theme: monoRedTheme,
    },
    {
        ...racksSkin,
        id: 'racks:yellow',
        name: 'Racks Yellow',
        theme: monoYellowTheme,
    },
    {
        ...flatSkin,
        id: 'flat:dark',
        name: 'Flat Dark',
        theme: darkTheme,
    },
    {
        ...flatSkin,
        id: 'flat:light',
        name: 'Flat Light',
        theme: lightTheme,
    },
    {
        ...flatSkin,
        id: 'flat:blue',
        name: 'Flat Blue',
        theme: monoBlueTheme,
    },
    {
        ...flatSkin,
        id: 'flat:pink',
        name: 'Flat Pink',
        theme: monoPinkTheme,
    },
    {
        ...flatSkin,
        id: 'flat:red',
        name: 'Flat Red',
        theme: monoRedTheme,
    },
    {
        ...flatSkin,
        id: 'flat:yellow',
        name: 'Flat Yellow',
        theme: monoYellowTheme,
    },
]

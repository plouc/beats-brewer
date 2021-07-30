import { Skin } from '../definitions'
import { FlatEnclosure } from './FlatEnclosure'

export const flatSkin: Omit<Skin, 'id' | 'name' | 'theme'> = {
    enclosure: FlatEnclosure,
}
